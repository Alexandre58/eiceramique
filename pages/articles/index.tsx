import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkRetour from "../../app/components/Linkretour";
import styles from "../../app/styles/_articles.module.scss";
import AsideNav from "../../app/components/AsideNav";
//images
import Image from "next/image";
import img8 from "../../public/images/img8news.jpg";
//import uuid

const Articles = () => {
  const router = useRouter();

  return (
    <section className={styles.article_section_container}>
      <div className={styles.article_div_container}>
        <h1 className={styles.article_section_h1}>Articles</h1>
        <LinkRetour />
      </div>
      <div
        className={styles.article_section_article_div}
        style={{ backgroundImage: `url(${img8.src})` }}
      >
        {/**      {articles.map((article) => (
          <article key={uuidv4()}>
        <Link
              className={styles.article_section_article}
              href={`/articles/${article.id.toString()}`}
            >
              <p>ARTICLE  sur 100</p>
              <p>appel article dans la db</p>
         

              <u> Lire la suite</u>
            </Link>} 
          </article>
        ))}*/}
      </div>
      <LinkRetour />
      <AsideNav />
    </section>
  );
};

export default Articles;
