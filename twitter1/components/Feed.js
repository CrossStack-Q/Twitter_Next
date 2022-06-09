import styles from '../styles/Feed.module.css'

import React from "react";
import { useState, useEffect,useRef } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import FlipMove from "react-flip-move";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";




function Feed() {
  const [name, setName] = useState([]);


  const [posts,setPosts] = useState([])

  useEffect(() => {
    return onSnapshot(query(collection(db,'posts'), orderBy('timestamp','desc')), snapshot => {
      setPosts(snapshot.docs);
    });

  }, [db])







  return (
    <div className={styles.feed}>
      <div className={styles.main}>
        <div className={styles.feed__header}>
          <h2>Home</h2>
        </div>

        <TweetBox />
        <FlipMove>
        {posts.map((posts) => (
          <Post
          key={posts.data().text}
            username={posts.data().username}
            displayName={posts.data().displayName}
            verified={posts.data().verified}
            text={posts.data().text}
            avatar={posts.data().avatar}
            image={posts.data().image}
          />
        ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
