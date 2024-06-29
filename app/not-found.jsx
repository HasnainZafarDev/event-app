import Link from "next/link";
import "./globals.css";

const NotFoundPage= () => {
  return (
    <div className="notFoundContainer">
      <h1 className="title">404 - Page Not Found</h1>
      <p className="description">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" passHref legacyBehavior>
        <a className="homeLink">Go back to Home</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
