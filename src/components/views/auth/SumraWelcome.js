/*
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import * as sdk from "matrix-react-sdk/src/index";
import { _td } from "matrix-react-sdk/src/languageHandler";
import CountlyAnalytics from "matrix-react-sdk/src/CountlyAnalytics";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { makeFetch, makeid } from "../../../../res/functions";
import { isMobile } from "react-device-detect";
import socialLinks from "./socialLinks";
import send from "../../../../res/vector-icons/send.svg";
import logo from "../../../../res/images/sumra/logo.svg";
import WelcomeCarousel from "./WelcomeCarousel.jsx";
import SumrachatLogo from "./SumrachatLogo.jsx";

// translatable strings for Welcome pages
_td("Sign in with SSO");

export default class SumraWelcome extends React.PureComponent {
    static replaces = "Welcome";

    constructor(props) {
        super(props);
        this.state = {
            phone: "",
        };

        CountlyAnalytics.instance.track("onboarding_welcome");
        this.state = {
            phone: "",
        };
    }

    render() {
        const AuthPage = sdk.getComponent("views.auth.AuthPage");
        const AuthBody = sdk.getComponent("auth.AuthBody");

        const links = socialLinks.map((v, index) => {
            let href = "";
            if (isMobile) {
                href = v.hrefMobile;
            } else {
                href = v.href;
            }
            return (
                <li key={index} onClick={this._goToVeryfycationCodePage}>
                    <a href={href} target="_blank" rel="noreferrer">
                        <img src={v.image} width={46} alt={v.title} />
                    </a>
                </li>
            );
        });

        return (
            <AuthPage>
                <AuthBody>
                    <div className="sumra-welcome-carousel">
                        <WelcomeCarousel />
                    </div>

                    <div className="sumra-welcome-carousel">
                        <WelcomeCarousel />
                    </div>
                    <div className="sumra-welcome-main">
                        <SumrachatLogo />
                        <div className="sumra-auth-form">
                            <section className="sumra-auth-login">
                                <h1 className="h1-stitle">Sign Up or Login</h1>
                                <h2>
                                    Start by using your <b> Messenger:</b>
                                </h2>

                                <ul className="sumra-auth-messengers">
                                    {links}
                                </ul>
                            </section>
                            <div className="sumra-line">or</div>
                            <section>
                                <h2>
                                    Start by using your <b>Mobile phone</b>{" "}
                                </h2>
                                <form>
                                    <fieldset className="sumra-phone-fieldset">
                                        <PhoneInput
                                            flags={flags}
                                            placeholder="Enter phone number"
                                            value={this.state.phone}
                                            onChange={this._changePhoneNumber}
                                        />

                                        <div
                                            className="sumra-phone-send"
                                            onClick={this._submitPhoneNumber}
                                        >
                                            <img src={send} />
                                        </div>
                                    </fieldset>
                                </form>
                            </section>
                            <section className="sumra-button-section">
                                <div className="sumra-line">or</div>
                                <a className="sumra-Button" href="/#/login">
                                    <span>Login with Sumra ID</span>
                                </a>
                            </section>
                        </div>
                        <div className="sumra-terms-privacy">
                            By using either Sign Up or Login you agree to our
                            <br />
                            <a href="#">Terms & Privacy Policy.</a>
                        </div>
                    </div>
                </AuthBody>
            </AuthPage>
        );
    }

    /**
     * Set state after changed phone number.
     *
     * @param {String} phone - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _changePhoneNumber = (phone) => {
        this.setState({ phone });
    };

    /**
     * _goToLoginPage
     */
    _goToLoginPage = () => {
        this.props.onStep(4);
    };

    /**
     * _goToVeryfycationCodePage
     */
    _goToVeryfycationCodePage = (e) => {
        const messenger = e.target.alt;
        const href = e.target.parentElement.href;
        localStorage.setItem("messenger", messenger);
        localStorage.setItem("href", href);
        location.href = location.origin + "/#/register";
    };

    /**
     * Submit form value (phone number).
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _submitPhoneNumber = (event) => {
        event.preventDefault();

        let { phone } = this.state;
        localStorage.setItem("messenger", phone);
        localStorage.setItem("href", phone);

        if (!phone) {
            return;
        }

        phone = phone.replace("+", "");
        this.setState({ phone });

        makeFetch("auth/v1/send-code", {
            phone_number: phone,
            app_uid: "chat.sumra.web",
        }).then(
            (response) => console.log,
            (error) => console.error
        );
        location.href = location.origin + "/#/register";
    };
}
