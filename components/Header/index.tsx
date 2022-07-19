import React, { FC } from "react";
import { Button, IconButton, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import MessageIcon from "@material-ui/icons/SmsOutlined";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./Header.module.scss";


export const Header: FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <svg className={styles.logo} viewBox="0 0 24 25">
          <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
          <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
          <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
        </svg>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        <Button className={styles.penButton} variant="contained">
          <CreateIcon />
          Новая запись
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
          <NotificationIcon />
        </IconButton>

        <Avatar
            className={styles.avatar}
          alt="Remy Sharp"
          src="https://klike.net/uploads/posts/2019-02/1550994129_1.jpg"
        />
        <ExpandMoreIcon />
      </div>
    </Paper>
  );
};
