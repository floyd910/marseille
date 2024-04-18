import "./Header.css";
import eng from "../../media/img/eng.svg";
import geo from "../../media/img/geo.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLanguage) => {
    // Assuming changeLanguage and navigate functions are available in your code
    changeLanguage(newLanguage);

    // Get the current path from the location object
    const currentPath = location.pathname;

    // Remove the existing language parameter from the current path, if present
    const currentPathWithoutLanguage = currentPath.replace(/\/(ka|en)/, "");

    // Construct the new URL with the updated language and the current path
    const newPath = `/${newLanguage}${currentPathWithoutLanguage}`;

    // Navigate to the new URL
    navigate(newPath);
  };

  return (
    <header>
      <div className="logo">
        <Link className="link" to={`/${language}`}>
          <h1>MA R S E I L L E</h1>
        </Link>
      </div>
      <div className="right_block">
        <button className="book_table">
          <a className="link" href="tel:+995577459479">
            {language === "en" ? "Book a table" : "დაჯავშნე"}
          </a>
        </button>
        <div>
          {language === "en" ? (
            <button
              onClick={() => handleLanguageChange("ka")}
              disabled={language === "ka"}
            >
              <img src={geo} alt="GEORGIA flag" />
            </button>
          ) : (
            <button
              onClick={() => handleLanguageChange("en")}
              disabled={language === "en"}
            >
              <img alt="Great Britain flag icon" src={eng} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
