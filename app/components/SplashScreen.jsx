import React from "react";

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        this.getSplashScreenClassNames = this.getSplashScreenClassNames.bind(this);
    }

    getSplashScreenClassNames() {
        const classNames = ["splash-container"];
        if (!this.props.showSplashScreen) {
            classNames.push("splash-container-hidden");
        }
        return classNames.join(" ");
    }

    render() {
        return (
            <div className={this.getSplashScreenClassNames()}>
                <div className="splash-main">
                    <h1 className="splash-heading">{"Welcome to Sabrina Renee's Cakes"}</h1>
                    <button
                        className="sc-button sc-button-invert splash-button"
                        onClick={this.props.onSplashDismiss}>Enter</button>
                </div>
            </div>
        );
    }
}
