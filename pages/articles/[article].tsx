import AsideNav from "../../app/components/AsideNav";
import LinkArticles from "../../app/components/LinkArticles";
import React from "react";
import styles from "../../app/styles/_atelier.module.scss";

const Article = () => {
  return (
    <section className={styles.atelier_section_container}>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>Article fetchArticle</h1>
        <LinkArticles />
      </div>
      <article className={styles.atelier_section_article}>
        <p>fetchArticle</p>
        <p>fetchArticle</p>
        <p>fetchArticle</p>
      </article>
      <AsideNav />
    </section>
  );
};
//RECUP DE TOUT LES ARTICLES  POUR CREER DES PAGES POUR CHAQUE ARTICLE AVEC [ARTICLE];JS
//ne pas oublier de mettre les props dans***const Article = (props) => {...
// export async function getStaticProps(context) {
//   const id = context.params.article;
//   //attention backtick dans le fetch
//   const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const article = await data.json();
//   return {
//     props: {
//       article,
//     },
//   };
// }
//getStaticPaths pour pouvoir creer des pages pour chaque article
// params: {
//     article: item.id.toString(), VOIR INDEX DE ARTICLE POUR le mot article
//   },
// }));
// export async function getStaticPaths() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const articles = await data.json();

//   const paths = articles.map((item) => ({
//     params: {
//       article: item.id.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
export default Article;
