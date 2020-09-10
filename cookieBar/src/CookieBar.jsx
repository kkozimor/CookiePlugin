import CookieConsent, { Cookies } from "react-cookie-consent";

import { Component, createElement } from "react";

import "./ui/CookieBar.css";

export default class CookieBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CookieConsent
                location="bottom"
                buttonText="Sure man!!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                {this.props.caption.value} <a href={this.props.link.value}> See more </a>{" "}
            </CookieConsent>
        );
    }
}
