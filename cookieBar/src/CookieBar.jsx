import CookieConsent, { Cookies } from "react-cookie-consent";

import { Component, createElement } from "react";

import "./ui/CookieBar.css";

export default class CookieBar extends Component {
    render() {
        return <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent> ;
    }
}

