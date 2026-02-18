import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Accessibility Statement | TechSupport4",
  description:
    "Accessibility commitment of TechSupport4 website.",
};

export default function AccessibilityPage() {

  const sections = [
    {
      id: "commitment",
      title: "Our Commitment",
      content:
        "We are committed to making our website accessible to all individuals.",
    },
    {
      id: "contact",
      title: "Contact Us",
      content:
        "If you experience difficulty accessing content, contact support@techsupport4.com.",
    },
  ];

  return <LegalLayout title="Accessibility Statement" sections={sections} />;
}
