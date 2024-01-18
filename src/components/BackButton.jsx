import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link className="btn" to={"/"}>
      Back
    </Link>
  );
}
