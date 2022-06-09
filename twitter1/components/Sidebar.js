import React from "react";
import styles from "../styles/Sidebar.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebartemp}>
        {/* Twitter icon */}
            <TwitterIcon className={styles.sidebar__twitterIcon} />

        <div className={styles.sidebarm}>
          <div className={styles.SidebarOptionsl}>
            <HomeIcon />
            <SidebarOption active text="Home" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <SearchIcon />
            <SidebarOption text="Explore" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <NotificationsNoneIcon />
            <SidebarOption text="Notification" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <MailOutlineIcon />
            <SidebarOption text="Messages" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <BookmarkBorderIcon />
            <SidebarOption text="Bookmarks" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <ListAltIcon />
            <SidebarOption text="Lists" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <PermIdentityIcon />
            <SidebarOption text="Profile" />
          </div>
          <div className={styles.SidebarOptionsl}>
            <MoreHorizIcon />
            <SidebarOption text="More" />
          </div>
          <Button variant="outlined" className={styles.sidebar__tweet} fullWidth>
            Tweet
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
