import React from "react";
import { LuMapPin } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const DoubtFooter = () => {
  return (
    <div>
      <div className="FooterContainer">
        <div className="Footersubcont">
          <div className="Footersubone">
            <img
              style={{ width: "80%" }}
              src="./DOUBTPUCHO LOGO 1 (3) (1).png"
              alt=""
            />
          </div>
          <div className="footermain">
          <div className="Footersubone1">
            <h5>Quick Links</h5>
            <ul>
              <li>Ask Doubt</li>
              <li>About us</li>
              <li>Resourse</li>
              <li>Career</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="Footersubone2">
            <h5>Reach us</h5>
            <ul>
              <li>
                {" "}
                <span style={{ margin: "0px 10px 0px -26px" }}>
                  <FaWhatsapp />
                </span>
                11235555 (WhatsApp only)
              </li>
              <li>
                {" "}
                <span style={{ margin: "0px 10px 0px -26px" }}>
                  <IoMailOpenOutline />
                </span>
                 <a className = "MailClass" href="mailto:contact@coachifylive.com?subject=Hello&body=This%20is%20the%20body%20of%20the%20email.">contact@coachifylive.com</a>
              </li>
              <li>
                {" "}
                <span style={{ margin: "0px 10px 0px -26px" }}>
                  <LuMapPin />
                </span>
                Plot No 30, Sunsai Building, Ground Floor, Financial District,
                Nanakramguda, Serilingampalli, Hyderabad, Rangareddy - 500032
              </li>
            </ul>
          </div>
          </div>
         
        </div>
        <div className="Footersubcont2">
          <div className="Footericon">
            <ul className="FootericonList1">
              <li>
                {" "}
                <img
                  src="/1384060.png
          "
                  alt=""
                  style={{ width: "100%", }}
                />{" "}
              </li>
              <li>
                <img
                  src="/94409a775c02d7658dd6e7ba88429b63-removebg-preview.png
          "
                  alt=""
                  style={{ width: "100%" }}
                />{" "}
              </li>
              <li>
                <img
                  src="Telegram_logo.png
          "
                  alt=""
                  style={{ width: "100%" }}
                />{" "}
              </li>
              <li>
                <img
                  src="https://cdn.pixabay.com/photo/2021/02/26/22/36/linkedin-6053397_1280.png
          "
                  alt=""
                  style={{ width: "100%",  }}
                />{" "}
              </li>
            </ul>
            <ul className="FootericonList2">
              <li>
              <p>Privacy Policy |</p>
              </li>
           
              <li>
              <p>Terms & Conditions</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footersubcont3">
        <ul className="FootericonList3">
              <li>
             <p><FaRegCopyright />All right reserved to DoubtPuch.in<a href="https://digitalwhopper.com/"> | Designed &amp; Developed  by Digital Whopper</a></p>
              </li>
         </ul>
        </div>
        
      </div>
    </div>
  );
};

export default DoubtFooter;
