import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Cookie Policy | TechSupport4",
  description:
    "How TechSupport4 uses cookies and tracking technologies.",
};

export default function CookiePolicy() {

  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies",
      content:
        "Cookies are small text files stored on your device to enhance browsing experience.",
    },
    {
      id: "types",
      title: "Types of Cookies We Use",
      content:
        "We use essential, analytics and performance cookies to improve service quality.",
    },
  ];

  return <LegalLayout title="Cookie Policy" sections={sections} />;
}
