import "./Footer.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { PiDeviceMobileFill } from "react-icons/pi";
import { RiFacebookCircleFill } from "react-icons/ri";
import MapComponent from "../mapComponent/MapComponenet";
import Adress from "../adress/Adress";

export default function Footer({ language }) {
  return (
    <footer>
      <Adress language={language} />
      <MapComponent />
      <div className="footer_info">
        <h5>MARSEILLE</h5>

        <a className="link" href="tel:+9950422272849">
          <p className="home_number">
            <FaPhone
              size="14px"
              color="white"
              style={{ margin: "0 10px 0 2px" }}
            />
            <span>+995 0422 27 28 49</span>
          </p>
        </a>
        <a className="link" href="tel:+995577459479">
          <p className="mobile_number">
            <PiDeviceMobileFill
              size="16px"
              color="white"
              style={{ margin: "0 10px 0 0" }}
            />
            <span>+995 577 459 479</span>
          </p>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100049358842040"
        >
          <RiFacebookCircleFill size="36px" color="white" />
        </a>
      </div>
    </footer>
  );
}
