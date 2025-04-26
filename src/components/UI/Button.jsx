import { Link } from "react-router-dom";

export default function Button({ label, href }) {
  return (
    <Link
      to={href}
      className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-full transition"
    >
      {label}
    </Link>
  );
}
