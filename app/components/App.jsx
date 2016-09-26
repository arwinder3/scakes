import React from "react";

import SplashScreen from "./SplashScreen";

let Event = (props) => (
    <div className="event-item">
        <div className="event-heading">
            <h1>{props.name} | {props.time} @ {props.place.formatted}</h1>
            <div style={{marginLeft: "auto"}}>
                <button className="sc-button sc-button-normal" style={{marginLeft: "auto"}}><i className="fa fa-calendar-plus-o" aria-hidden="true" style={{marginRight: 5}}></i>Add to calendar</button>
                <button className="sc-button sc-button-normal" style={{marginLeft: "auto"}}><i className="fa fa-map-marker" aria-hidden="true" style={{marginRight: 5}}></i>Directions</button>
            </div>
        </div>
        <div className="group">
            <img className="event-image" src={props.photo} width="150"/>
            {props.description}
        </div>
    </div>
);

let EventList = (props) => (
    <div className="event-list">
        {
            props.events.map(event => (
                <Event key={event.id} {...event} />
            ))
        }
    </div>
);

let NavBar = () => (
    <nav className="nav-bar">
        <ul className="nav group">
            <li className="active"><span className="menu-item">Events</span></li>
            <li><span className="menu-item">Menu</span></li>
            <li><span className="menu-item">Contact</span></li>
        </ul>
    </nav>
);

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            showSplash: true
        };

        this.dismissSplash = this.dismissSplash.bind(this);
    }

    componentWillMount() {
        this.setState({
            events: [
                {
                    id: 1,
                    name: "Ferry Building Market",
                    description: "The Ferry Plaza Farmers Market is a California certified farmers market operated by the nonprofit Center for Urban Education about Sustainable Agriculture (CUESA). The market is widely acclaimed for both the quality and diversity of its fresh farm products, and artisan and prepared foods. It is renowned throughout the country as one of the top farmers markets to visit. On any day, especially Saturdays, some of San Francisco’s best known chefs, and most famous farmers, can be seen at the market. The market provides a forum for people to learn about food and agriculture. Each week nearly 25,000 shoppers visit the farmers market.",
                    place: {
                        formatted: "Ferry Building SF",
                        coords: {
                            lat: 0,
                            lng: 1
                        }
                    },
                    time: "08:00 - 17:00",
                    photo: "http://1rgcuiqlh7e45qrd62nzeupx.wpengine.netdna-cdn.com/wp-content/themes/ferry-building/img/ferry-building.png"
                },
                {
                    id: 2,
                    name: "San Mateo Farmers Market",
                    description: "With over 60 Certified Farmers' Markets throughout the San Francisco Bay Area, we're close to your home, office and favorite getaway spots, making it easy to cook with fresh-picked ingredients. See you soon!",
                    place: {
                        formatted: "1 El Camino Real, San Mateo, CA",
                        coords: {
                            lat: 0,
                            lng: 1
                        }
                    },
                    time: "08:00 - 17:00",
                    photo: "https://unsplash.it/200?image=1080"
                }
            ]
        });
    }

    dismissSplash() {
        this.setState({
            showSplash: false
        });
    }

    render() {
        return (
            <div className="app-container">
                <SplashScreen
                    showSplashScreen={this.state.showSplash}
                    onSplashDismiss={this.dismissSplash}/>
                {
                    (this.state.showSplash === false) ?
                    <div style={{height: "100%", width: "100%"}}>
                        <header className="site-header">
                            <h1>{"Sabrina Renee's Cakes"}</h1>
                        </header>
                        <div className="main-content-wrapper">
                            <NavBar />
                            <div className="events-list-wrapper">
                                <div style={{height: "10%"}}>
                                    <p className="center-text" style={{fontSize: "1.2em"}}>
                                        Stop by at one of the following events to checkout my cakes, cupcakes... and more!
                                    </p>
                                </div>
                                <div className="events-list-container">
                                    <EventList events={this.state.events} />
                                </div>
                            </div>
                        </div>
                    </div> : null
                }
            </div>
        );
    }

}
