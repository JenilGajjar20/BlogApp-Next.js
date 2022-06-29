import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Blog.module.css";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(content) {
    return { __html: content };
  }

  const [blog, setBlog] = useState(props.blog);

  return (
    <div className={styles.container}>
      <Head>
        <title>iCoder - {blog?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next app, blog app" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>{blog?.title}</h2>
        {blog && (
          <div className={styles.content}>
            <h4>{blog.content[0].question}</h4>
            <p>{blog.content[0].answer}</p>
            <h4>{blog.content[1].question}</h4>
            <p>{blog.content[1].answer}</p>
            <h4>{blog.content[2].question}</h4>
            <p>{blog.content[2].answer}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  let allBlogs = await fs.promises.readdir("blogdata");
  allBlogs = allBlogs.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });
  console.log("Blogs: ", allBlogs);

  return {
    paths: allBlogs,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // console.log("Context: ", context.query);
  // const router = useRouter();
  // console.log("Context", context);
  const { slug } = context.params;

  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // let blog = await data.json();

  return {
    props: {
      blog: JSON.parse(blog),
    },
  };
}

export default Slug;
