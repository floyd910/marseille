import React from "react";
import dish from "../../media/img/16.jpg";
import dish2 from "../../media/img/25.jpg";

import dish3 from "../../media/img/13.jpg";

import dish4 from "../../media/img/19.jpg";

import dish5 from "../../media/img/15.jpg";

import dish6 from "../../media/img/7.jpg";

import "./Menu.css";

export default function Menu({ language }) {
  return (
    <div className="menu">
      {language === "ka" ? <h4> მენიუ</h4> : <h4>Menu</h4>}
      {language === "ka" ? (
        <div className="food">
          <div className="menu_item">
            <img src={dish} alt="აჭარული ხაჭაპური - რესტორანი მარსელი" />
            <h3>აჭარაული ხაჭაპური</h3>
          </div>
          <div className="menu_item">
            <img src={dish2} alt="შემწვარი გოჭი - რესტორანი მარსელი" />
            <h3>შემწვარი გოჭი</h3>
          </div>
          <div className="menu_item">
            <img src={dish3} alt="ბარაბულკა - რესტორანი მარსელი" />
            <h3>"ბარაბულკა"</h3>
          </div>
          <div className="menu_item">
            <img src={dish4} alt="ქათმის სალათი - რესტორანი მარსელი" />
            <h3>ქათმის სალათი</h3>
          </div>
          <div className="menu_item">
            <img src={dish5} alt="ტოლმა - რესტორანი მარსელი" />
            <h3>ტოლმა</h3>
          </div>
          <div className="menu_item">
            <img src={dish6} alt="ასეტრინა - რესტორანი მარსელი" />
            <h3>ასეტრინა</h3>
          </div>
        </div>
      ) : (
        <div className="food">
          <div className="menu_item">
            <img src={dish} alt="Adjarian Khachapuri - Marseille Restaurant" />
            <h3>Adjarian Khachapuri</h3>
          </div>
          <div className="menu_item">
            <img src={dish2} alt="Pork - Marseille Restaurant" />
            <h3>Pork</h3>
          </div>
          <div className="menu_item">
            <img src={dish3} alt="Barabulka - Marseille Restaurant" />
            <h3>"Barabulka"</h3>
          </div>
          <div className="menu_item">
            <img src={dish4} alt="Chicken salad - Marseille Restaurant" />
            <h3>Chicken salad</h3>
          </div>
          <div className="menu_item">
            <img src={dish5} alt="Tolma - Marseille Restaurant" />
            <h3>Tolma</h3>
          </div>
          <div className="menu_item">
            <img src={dish6} alt="Sturgeon - Marseille Restaurant" />
            <h3>Sturgeon</h3>
          </div>
        </div>
      )}
      {language === "ka" ? (
        <h5>და ბევრი სხვა...</h5>
      ) : (
        <h5>and much more...</h5>
      )}
    </div>
  );
}
