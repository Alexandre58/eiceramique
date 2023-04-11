import Link from "next/link";
import React from "react";
import styles from "../styles/_linkRetour.module.scss";

const LinkArticles = () => {
  return (
    <div>
      <Link href={"/articles"} className={styles.linkRetour_container}>
        mettre un props retour
      </Link>
    </div>
  );
};

export default LinkArticles;
