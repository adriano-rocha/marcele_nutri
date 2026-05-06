// src/components/home/Footer.tsx
import { CRN } from "../../data/nutriData";

export default function Footer() {
  return (
    <footer>
      <div 
        className="text-center py-8 text-sm px-6" 
        style={{ 
          color: "#d8dad655", 
          backgroundColor: "#1a1214" 
        }}
      >
        <p>
          © {new Date().getFullYear()} M.A. Nutrição · Marcele Nutri · {CRN}
        </p>
        <p className="mt-2">
          <a
            href="https://www.instagram.com/marceleasevedo.nutri?igsh=MXZxM242Zm5tZ3BiZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
            style={{ 
              color: "#d8dad655", 
              textDecoration: "underline" 
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @marceleasevedo.nutri
          </a>
        </p>
      </div>
    </footer>
  );
}