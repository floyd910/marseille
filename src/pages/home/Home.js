import Hero from "../../components/hero/Hero";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="home">
      <Hero language={language} />
      <Gallery/>
      <Footer language={language} />
    </div>
  );
}
