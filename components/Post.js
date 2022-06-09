import { Avatar } from "@material-ui/core";
import React,{ forwardRef} from "react";
import styles from "../styles/Post.module.css"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { ChatBubbleOutline, FavoriteBorderRounded, Publish, Repeat } from "@material-ui/icons";




const Post = forwardRef(({ displayName, username,text, verified, timestamp, post ,avatar,image}, ref) => {
  return (
    <div className={styles.post} ref={ref}>
      <div className={styles.post__avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={styles.post__body}>
        <div className={styles.post__header}>
          <div className={styles.post__headerText}>
            <h3>
              {displayName}{" "}
              <span className={styles.post__headerSpecial}>
                 {verified && <VerifiedUserIcon className={styles.post__badge} />}
                @{username}
              </span>
            </h3>
          </div>
          <div className={styles.post__headerDescription}>
              <p>
                {text}
              </p>
          </div>
        </div>
        <img src={image} alt="" width="100%" height="auto" />
        <div className={styles.post__footer}>
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorderRounded fontSize="small" />
            <Publish fontSize="small"/>
        </div>
      </div>
    </div>
  );
})

export default Post; 
