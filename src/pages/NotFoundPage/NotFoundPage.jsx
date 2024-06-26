import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.page}>
      <p>Opps! Page not found! Sorry!</p>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}
