import "./Hero.css";

export default function Hero({ language }) {
  return (
    <div className="hero">
      {language === "ka" ? (
        <h2>
          მარსელი <br />
          <strong>რესტორანი & სასტუმრო</strong>
        </h2>
      ) : (
        <h2>
          Marseille <br />
          <strong>Restaurant & Hotel</strong>
        </h2>
      )}
    </div>
  );
}
