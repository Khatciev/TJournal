import React, { FC } from "react";
import { Button } from "@material-ui/core";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import MessageIcon from "@material-ui/icons/SmsOutlined";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import styles from "./LeftMenu.module.scss";
const LeftMenu: FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <WhatshotOutlinedIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingUpIcon />
            Рейтинг TJ
          </Button>
        </li>

        <li>
          <Button>
            <FormatListBulletedIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
