// src/components/home/Footer.tsx
import { CRN } from "../../data/nutriData";

const socialLinks = [
  {
    label: "@marceleasevedo.nutri",
    href: "https://www.instagram.com/marceleasevedo.nutri?igsh=MXZxM242Zm5tZ3BiZw==",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "@marceleasevedo.nutri",
    href: "https://www.tiktok.com/@marceleasevedo.nutri?_r=1&_t=ZS-96NqpDUMe0Y",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div
        className="px-6 py-8 text-center text-sm"
        style={{
          color: "#d8dad655",
          backgroundColor: "#1a1214",
        }}
      >
        <p>© {year} M.A. Nutrição · Marcele Asevedo Nutri · {CRN}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${item.label} em nova aba`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 transition-opacity hover:opacity-100"
              style={{
                color: "#d8dad6aa",
                border: "1px solid #d8dad622",
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}