import React from "react";
import styles from "../styles/Widgets.module.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"
import Search from "@material-ui/icons/Search"

const Wigdets = () => {
  return (
    <div className={styles.widgets1}>
      <div className={styles.widgets__input}>
        <Search className={styles.widgets__searchIcon}/>
        <input type="text" placeholder="Search Twitter"/>
      </div>
      <div className={styles.widgets__widgetContainer}>
        <h2>
          What's happening
        </h2>
        <TwitterTweetEmbed tweetId={"1509045311175540736"}/>
        
      </div>
      <TwitterTimelineEmbed 
      sourceType="profile"
      screenName="crossrehk0"
      options={{height: 400}}
      />
      <TwitterShareButton 
      url={"https://twitter.com/CrossRehk0/status/1509045311175540736"}
      options={{text: "#reactjs is awesome",via:"crossrehk"}}
      />

    </div>
  );
};

export default Wigdets;
