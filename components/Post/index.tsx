import React, { FC } from "react";
import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";

import styles from "./Post.module.scss";

export const Post: FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h2" className={styles.title}>
        Hello world!!
      </Typography>
      <Typography className="mt-15 mb-15" variant="h6">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века. В то время некий безымянный
      </Typography>

      <Image
        blurDataURL={
          "https://images.unsplash.com/photo-1637118024574-e230455e0976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        src={
          "https://images.unsplash.com/photo-1637118024574-e230455e0976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        height={500}
        width={600}
        placeholder={"blur"}
      />
    </Paper>
  );
};
