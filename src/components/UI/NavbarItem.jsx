
import { Link } from "react-router-dom";

export default function NavbarItem({ label, href }) {
  return (
    <Link
      to={href}
      className="text-gray-700 hover:text-primary transition font-medium"
    >
      {label}
    </Link>
  );
}
