import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
           <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />  
            <input placeholder="Search BathTub" type="text" />  
           </div>

            <div className="widgets__widgetContainer">
            <h2>What's going on?</h2>

            <TwitterTweetEmbed tweetId={"1292761888246378496"} ></TwitterTweetEmbed>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ElonMusk"
                options={{ height: 400}}
            />

            <TwitterShareButton
                url={"https://www.innovisionsociety.org/scholarship-recipients"}
                options={{ text: "A scholarship I won!"}}
                />
            </div>
        </div>
    );
}

export default Widgets
