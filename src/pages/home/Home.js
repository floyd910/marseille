import Hero from "../../components/hero/Hero";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="home">
      <Hero language={language} />
      <Menu language={language} />
      <Footer language={language} />
    </div>
  );
}
