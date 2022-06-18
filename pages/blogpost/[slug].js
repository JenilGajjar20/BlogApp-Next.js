import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Blog.module.css";

const slug = () => {
  const [blog, setBlog] = useState();

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { slug } = router.query;

    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((items) => {
        // console.log("Items: ", items);
        return items.json();
      })
      .then((data) => {
        // console.log("Data: ", data);
        setBlog(data);
      });
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <Head>
        <title>iCoder - {blog?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next app, blog app" />
      </Head>

      <main className={styles.main}>
        <h2>{blog?.title}</h2>
        <p>{blog?.content}</p>
      </main>
    </div>
  );
};

export default slug;