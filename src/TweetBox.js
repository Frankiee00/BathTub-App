import React, { useState} from 'react'
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'ANON',
            username: 'ANON',
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://telecomstechnews.com/wp-content/uploads/sites/7/2020/06/anonymous-hacking-george-floyd-security-ddos-minneapolis-police-usa-protests.jpg"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://telecomstechnews.com/wp-content/uploads/sites/7/2020/06/anonymous-hacking-george-floyd-security-ddos-minneapolis-police-usa-protests.jpg"></Avatar>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's new?" 
                type="text" 
                />
            </div>
            <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox_imageInput" 
                placeholder="Optional: Enter image URL" 
                type="text" 
            />

            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">TubThought</Button>
        </form>
        </div>
    
}

export default TweetBox
