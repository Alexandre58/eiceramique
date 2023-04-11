import AsideNav from "../app/components/AsideNav";
import LinkRetour from "../app/components/Linkretour";
import React from "react";
import styles from "../app/styles/_atelier.module.scss";
import Image from "next/image";
import img7 from "../public/images/img7.jpg";


const Contact = () => {
  return (
    <section className={styles.atelier_section_container}>
    
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>CONTACT</h1>
        <LinkRetour />
      </div>

      <article className={styles.atelier_section_article}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          incidunt ratione autem quaerat! Omnis at possimus accusamus ab ea
          fugiat excepturi labore! Ex minus optio non consequuntur, tenetur
          cupiditate provident! Facere nobis odit asperiores officia qui ducimus
          illum consequatur ut suscipit repudiandae? Vero beatae aut, eaque
          nobis cumque ullam optio, facere corporis natus at, repellendus quam
          repudiandae nisi labore dolor! Corporis quae non blanditiis impedit
          dolor dignissimos maiores saepe commodi nam libero ratione eos,
          aspernatur deserunt quo in
        </p>
      </article>
      <AsideNav />
      <LinkRetour/>
    </section>
  );
};

export default Contact;