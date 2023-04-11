import Link from "next/link";
import React from "react";
import styles from "../styles/_linkRetour.module.scss";

const RetourneAdresse = () => {
  return (
    <div>
      <Link href={"/users"} className={styles.linkRetour_container}>
        props retour
      </Link>
    </div>
  );
};

export default RetourneAdresse;
