import Link from "next/link";
import React from "react";
import styles from "../styles/_linkRetour.module.scss";
const LinkRetour = () => {
  return (
    <div>
      <Link className={styles.linkRetour_container} href={"/"}>
       props retour
      </Link>
    </div>
  );
};

export default LinkRetour;
