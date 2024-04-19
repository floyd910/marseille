import Hero from "../../components/hero/Hero";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import { Menu } from "@mui/material";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="home">
      <Hero language={language} />
      <Gallery/>
      {/* <Menu language={language}/> */}
      <Footer language={language} />
    </div>
  );
}
