import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      key: "about-us",
      type: "internal",
      values: [
        { to: "about", label: "About us" },
        { to: "blog", label: "Blog" },
        { to: "news", label: "News" },
        { to: "policy", label: "Privacy policy" },
        { to: "team", label: "Our team" },
        { to: "careers", label: "Careers" },
      ],
    },
    {
      key: "help",
      type: "external",
      values: [
        { to: "#", label: "Support" },
        { to: "#", label: "Refund policy" },
        { to: "#", label: "Terms of service" },
        { to: "#", label: "Contact us" },
      ],
    },
    {
      key: "social",
      type: "external",
      values: [
        { to: "#", label: "Facebook" },
        { to: "#", label: "Twitter" },
        { to: "#", label: "Instagram" },
        { to: "#", label: "LinkedIn" },
      ],
    },
    {
      key: "goals",
      type: "internal",
      values: [
        { to: "jee", label: "JEE Preparation" },
        { to: "neet", label: "NEET Preparation" },
        { to: "foundation", label: "Foundation courses" },
        { to: "skills", label: "Skill development" },
      ],
    },
    {
      key: "courses",
      type: "internal",
      values: [
        { to: "courses", label: "Classroom courses" },
        { to: "online", label: "Online courses" },
        { to: "test-series", label: "Test series" },
        { to: "results", label: "Results" },
        { to: "admission", label: "Admission" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-y">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-5">
          {footerLinks.map((section) => (
            <div key={section.key}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                {section.key}
              </h2>
              <ul className="text-gray-500 font-medium">
                {section.values.map((link) => (
                  <li key={link.label}>
                    {section.type === "internal" ? (
                      <Link to={link.to} className="hover:underline">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.to} className="hover:underline">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
