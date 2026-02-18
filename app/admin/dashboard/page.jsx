"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState(null); // ✅ store token safely

  // ✅ Get token safely in browser only
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      router.push("/admin/login");
    } else {
      setToken(storedToken);
    }
  }, []);

  const fetchTickets = async (authToken) => {
    if (!authToken) return;

    const res = await fetch(
      `http://localhost:5000/api/admin/tickets?page=${page}&limit=10&search=${search}`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    const data = await res.json();
    setTickets(data.tickets || []);
    setTotal(data.total || 0);
  };

  useEffect(() => {
    if (token) {
      fetchTickets(token);
      socket.on("newTicket", () => fetchTickets(token));
    }

    return () => socket.off("newTicket");
  }, [token, page, search]);

  const handleClose = async (id) => {
    await fetch(`http://localhost:5000/api/admin/tickets/${id}/close`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchTickets(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by Case ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-5 p-2 rounded text-black"
      />

      <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3">Case ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-t border-gray-700">
              <td className="p-3">{ticket.case_id}</td>
              <td>{ticket.name}</td>
              <td>{ticket.status}</td>
              <td>
                {ticket.status === "OPEN" && (
                  <button
                    onClick={() => handleClose(ticket.id)}
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    Close
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-5 gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button
          disabled={page * 10 >= total}
          onClick={() => setPage(page + 1)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
