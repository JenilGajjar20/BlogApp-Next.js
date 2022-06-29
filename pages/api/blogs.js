// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  // console.log("Count: ", req.query.count);
  let data = await fs.promises.readdir("blogdata");
  // console.log("Data: ", data);
  data = data.slice(0, parseInt(req.query.count));

  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log("Item: ", item);
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log("myFile: ", myFile);
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);

  // fs.readdir("blogdata", (err, data) => {
  //   if (err)
  //     return res
  //       .status(500)
  //       .json({ error: "Blogs can't be fetched. Please try again!!" });
  //   console.log(data);

  //   let allBlogs = [];

  //   data.forEach((item) => {
  //     console.log("Item: ", item);
  //     fs.readFile(`blogdata/${item}`, (content) => {
  //       console.log("Content: ", content);
  //       allBlogs.push(content);
  //     });
  //   });

  //   res.status(200).json(allBlogs);
  // });
}
