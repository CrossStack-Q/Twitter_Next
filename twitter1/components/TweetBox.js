import { Avatar, Button } from "@material-ui/core";
import React from "react";
import styles from "../styles/TweetBox.module.css";
import { useState } from "react";
import { db } from "../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


function TweetBox() {



  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");






    const sendTweet = async (e) => {
      // async function sendTweet(){
      e.preventDefault();


      const docRef = await addDoc(collection(db, 'posts'), {
        displayName: "Anurag Sharma",
        username: "crossrehk",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: tweetImage,
        timestamp: serverTimestamp()
      })

      console.log("New doc added with ID ", docRef.id)

     




      setTweetImage("");
      setTweetMessage("");



    };


  return (
    <div className={styles.tweetbox}>
      <form>
        <div className={styles.tweet__input}>
          <Avatar src="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            name="text"
            id="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          name="text"
          id="text"
          placeholder="Enter Image Url"
          className={styles.tweetBox__imageInput}
        />
        <Button type="submit" onClick={sendTweet} className={styles.tweetBox__tweetButton}>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
