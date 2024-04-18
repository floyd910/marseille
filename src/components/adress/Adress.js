import "./Adress.css";

const Adress = ({ language }) => {
  return (
    <div className="adress">
      {language !== "ka" ? (
        <p>36 Baku Street, Batumi (56 Gogebashvili Street)</p>
      ) : (
        <p>ბაქოს ქუჩა 36, ბათუმი (ყოფილი გოგებაშვილის 56)</p>
      )}
    </div>
  );
};

export default Adress