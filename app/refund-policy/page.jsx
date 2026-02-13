import LegalLayout from "../components/LegalLayout";
import FeedbackSection from "../components/FeedbackSection";
export const metadata = {
  title: "Refund Policy | TechSupport4",
  description:
    "Refund policy for TechSupport4 remote technical support services.",
};

export default function RefundPage() {

  const sections = [

    {
      id: "eligibility",
      title: "Refund Eligibility",
      content:
        "Refunds may be considered if the issue remains unresolved and no meaningful portion of service was delivered.",
    },

    {
      id: "non-refundable",
      title: "Non-Refundable Situations",
      content:
        "Refunds are not applicable if service was successfully delivered, partially completed, or if customer disconnects the session prematurely.",
    },

    {
      id: "chargeback-protection",
      title: "Chargeback Protection Policy",
      content:
        "Customers agree to contact us before initiating chargebacks. Improper chargebacks may result in permanent account suspension and recovery of dispute processing fees.",
    },

    {
      id: "refund-limitation",
      title: "Refund Limitation",
      content:
        "Maximum refund shall not exceed the amount paid for the specific service. Refund requests must be submitted within 7 days of service delivery.",
    },

    {
      id: "processing-time",
      title: "Processing Time",
      content:
        "Approved refunds are processed within 5–7 business days via the original payment method.",
    },
    {
     id: "payment-risk",
    title: "Payment Risk & Abuse Protection",
    content:
      "We reserve the right to refuse service if payment abuse, refund exploitation, or repeated dispute activity is detected. Multiple fraudulent attempts may result in blacklisting and reporting to payment processors.",
    },


  ];

  return (
    <>
     <LegalLayout 
      title="Refund Policy"
      sections={sections}
      version="v2.1.0"
    />
    <div className="max-w-4xl mx-auto px-6 pb-20">
      <FeedbackSection />
      </div>
    </>  
  );
 
}
