import { SiMinutemailer } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="phone">
        <BsFillTelephoneFill size="16px" color="#333" /> 577 45 94 79
      </div>
      <div className="mail">
        <SiMinutemailer size="22px" color="#333" />
        MAVILE19@MAIL.RU
      </div>
      <div className="address">
        <MdLocationOn size="21px" color="#333" />
        38 BAKU STREET BATUMI
      </div>
      <p className="open">7/7 till 2AM</p>
    </div>
  );
}
