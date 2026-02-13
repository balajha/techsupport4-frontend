import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy | TechSupport4",
  description:
    "Enterprise-level privacy policy for TechSupport4 remote technical support services.",
};

export default function PrivacyPolicyPage() {

  const sections = [

    {
      id: "information-collection",
      title: "Information We Collect",
      content:
        "We collect personal information including name, email address, phone number, billing details, IP address, device diagnostics, and technical session data necessary to deliver remote technical support services.",
    },

    {
      id: "data-processing",
      title: "Data Processing Agreement (DPA)",
      content:
        "TechSupport4 acts as a data processor where applicable under GDPR and UK GDPR. Personal data is processed solely for contracted support services and protected using appropriate technical and organizational safeguards.",
    },

    {
      id: "payment-security",
      title: "Payment Security & PCI Compliance",
      content:
        "All payments are processed via PCI-DSS compliant third-party processors. We do not store full credit card information. Transactions are encrypted using SSL/TLS protocols.",
    },

    {
      id: "remote-access",
      title: "Remote Access Security Disclaimer",
      content:
        "Remote technical support requires temporary system access. Customers must grant explicit consent before session initiation. All sessions use encrypted connections. We are not responsible for pre-existing vulnerabilities or third-party software risks.",
    },

    {
      id: "ip-logging",
      title: "IP Logging & Monitoring",
      content:
        "We log IP addresses, browser data, timestamps, and device identifiers for fraud prevention, cybersecurity monitoring, and service optimization.",
    },

    {
      id: "childrens-privacy",
      title: "Children's Privacy (COPPA Compliance)",
      content:
        "Our services are not intended for children under 13 years of age. We do not knowingly collect personal data from minors. If such data is discovered, it will be promptly deleted.",
    },

    {
      id: "email-marketing",
      title: "Email Communications & Unsubscribe",
      content:
        "Customers may receive service-related or promotional communications. Users may unsubscribe at any time via email link or by contacting support@techsupport4.com.",
    },

    {
      id: "physical-address",
      title: "Mailing Address",
      content:
        "For official correspondence, legal notices, or privacy inquiries, please contact us at support@techsupport4.com.",
    },

    {
      id: "governing-law",
      title: "Governing Law",
      content:
        "This Privacy Policy and any disputes arising from use of our services shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.",
    },

    {
      id: "arbitration",
      title: "Binding Arbitration Agreement",
      content:
        "Any disputes, claims, or controversies arising from this policy shall be resolved exclusively through binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration shall take place in Delaware, USA.",
    },

    {
      id: "dispute-resolution",
      title: "Dispute Resolution Process",
      content:
        "Before initiating arbitration, users agree to attempt informal resolution by contacting us directly. We will attempt to resolve disputes within 30 days of notification.",
    },

    {
      id: "dmca",
      title: "DMCA Notice & Copyright Policy",
      content:
        "If you believe that any content on our website infringes your copyright, you may submit a DMCA notice including identification of the copyrighted work, the infringing material, and your contact details. Notices should be sent to support@techsupport4.com.",
    },

    {
      id: "security-disclosure",
      title: "Security Vulnerability Disclosure Policy",
      content:
        "We are committed to maintaining strong cybersecurity practices. If you discover a security vulnerability, please responsibly disclose it by emailing support@techsupport4.com. We request that you do not publicly disclose the issue until it has been resolved.",
    },

    {
      id: "policy-updates",
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy periodically. Continued use of services after changes indicates acceptance of the updated policy.",
    },

  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      sections={sections}
      version="v3.0.0"
    />
  );
}
