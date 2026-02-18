import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Disclaimer | TechSupport4",
  description:
    "Legal disclaimer regarding TechSupport4 remote support services.",
};

export default function DisclaimerPage() {

  const sections = [
    {
      id: "independent-service",
      title: "Independent Service Provider",
      content:
        "TechSupport4 is an independent technical support provider and is not affiliated with any third-party brands.",
    },
    {
      id: "trademarks",
      title: "Trademarks",
      content:
        "All logos and trademarks belong to their respective owners.",
    },
  ];

  return <LegalLayout title="Disclaimer" sections={sections} />;
}
