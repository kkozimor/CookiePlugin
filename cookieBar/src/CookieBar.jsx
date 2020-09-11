import CookieConsent, { Cookies } from "react-cookie-consent";

import { Component, createElement } from "react";

import "./ui/CookieBar.css";

export default class CookieBar extends Component {
    constructor(props) {
        super(props);
    }

    fixEmptyString(value) {
        if (value === "") return undefined;
        else return value;
    }

    render() {
        return (
            <div id="chatbot-container" style={this.props.style} className={this.props.class}>
                <CookieConsent
                    location={this.fixEmptyString(this.props.location)}
                    disableStyles={this.props.disableStyles}
                    hideOnAccept={this.props.hideOnAccept}
                    buttonText={this.fixEmptyString(this.props.buttonText)}
                    declineButtonText={this.props.declineButtonText}
                    cookieName={this.props.cookieName}
                    cookieValue={this.props.cookieValue}
                    declineCookieValue={this.props.declineCookieValue}
                    setDeclineCookie={this.props.setDeclineCookie}
                    onAccept={this.props.onAccept}
                    onDecline={this.props.onDecline}
                    debug={this.props.debug}
                    expires={this.props.expires}
                    overlay={this.props.overlay}
                    containerClasses={this.props.containerClasses}
                    buttonClasses={this.props.buttonClasses}
                    buttonWrapperClasses={this.props.buttonWrapperClasses}
                    declineButtonClasses={this.props.declineButtonClasses}
                    buttonId={this.props.buttonId}
                    declineButtonId={this.props.declineButtonId}
                    contentClasses={this.props.contentClasses}
                    overlayClasses={this.props.overlayClasses}
                    // style={this.props.style}
                    // buttonStyle={this.props.buttonStyle}
                    // declineButtonStyle={this.props.declineButtonStyle}
                    // contentStyle={this.props.contentStyle}
                    // overlayStyle={this.props.overlayStyle}
                    disableButtonStyles={this.props.disableButtonStyles}
                    enableDeclineButton={this.props.enableDeclineButton}
                    flipButtons={this.props.flipButtons}
                    // ButtonComponent={this.props.ButtonComponent}
                    sameSite={this.props.sameSite}
                    cookieSecurity={this.props.cookieSecurity}
                >
                    {this.props.caption.value} <a href={this.props.link.value}> See more </a>{" "}
                </CookieConsent>
            </div>
        );
    }
}
