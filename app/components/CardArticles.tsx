import React from "react";
import Link from "next/link";

import styles from "../styles/_cardArticles.module.scss";

const CardArticles = () => {
  return (
    <>
      <article className={styles.CardArticles_article}>
        <h2 className={styles.CardArticles_h2}>mettre des prosps</h2>
        <h3 className={styles.CardArticles_h3}>mettre des prosps</h3>
        <p className={styles.CardArticles_p}> mettre des prosps</p>
      </article>
    </>
  );
};

export default CardArticles;
