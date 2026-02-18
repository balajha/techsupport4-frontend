import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Terms and Conditions | TechSupport4",
  description:
    "Legal terms governing use of TechSupport4 remote support services.",
};

export default function TermsPage() {

  const sections = [

    {
      id: "service-overview",
      title: "Service Overview",
      content:
        "TechSupport4 provides independent remote technical support services for Internet, Printer, Wi-Fi Router, and Smart TV related issues.",
    },

    {
      id: "payments",
      title: "Payment Terms",
      content:
        "All services are prepaid unless otherwise agreed. Charges are disclosed before service delivery. By making payment, you confirm authorization to use the payment method.",
    },

    {
      id: "arbitration",
      title: "Binding Arbitration Agreement",
      content:
        "Any dispute arising from these Terms shall be resolved through binding arbitration under the rules of the American Arbitration Association. Arbitration shall be conducted in Delaware, USA. Users waive the right to participate in class-action lawsuits.",
    },

    {
      id: "fraud-prevention",
      title: "Fraud Prevention & Identity Verification",
      content:
        "We reserve the right to verify customer identity before providing services. Suspicious transactions may be delayed, cancelled, or reported to relevant authorities. Fraudulent activities will result in permanent service termination.",
    },

    {
      id: "chargeback",
      title: "Chargeback Policy",
      content:
        "Customers agree not to initiate chargebacks without first contacting our support team. Fraudulent or abusive chargebacks may result in legal action and recovery of associated costs.",
    },

    {
      id: "affiliate-disclaimer",
      title: "Affiliate & Third-Party Disclaimer",
      content:
        "We may participate in affiliate programs. We are not responsible for third-party products, services, or websites. All trademarks belong to their respective owners.",
    },

    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content:
        "TechSupport4 shall not be liable for indirect, incidental, or consequential damages. Maximum liability shall not exceed the amount paid for the specific service.",
    },

  ];

  return (
    <LegalLayout
      title="Terms and Conditions"
      sections={sections}
      version="v2.0.0"
    />
  );
}
