import { db } from "../../../../../Components/dbConnection";
import updateForm from "../../../../../Components/updateform/updateForm";

export default async function editPage({ params }) {
  const postParams = await params;
  const post = await db.query(`SELECT * FROM posts WHERE id =$1`, [
    postParams.id,
  ]);
  const wrangledPosts = post.rows[0];
  console.log(wrangledPosts);
  return (
    <>
      <form id="postForm" action={updateForm}>
        <input type="hidden" name="id" value={wrangledPosts.id}></input>
        <input
          type="text"
          placeholder={wrangledPosts.name}
          name="name"
          id="name"
          value={wrangledPosts.name || "Default Content"}
        ></input>
        <input
          type="text"
          placeholder={wrangledPosts.content}
          name="content"
          id="content"
          value={wrangledPosts.content || "Default Content"}
        ></input>
        <select name="category" id="category">
          <option value={wrangledPosts.category}>
            {wrangledPosts.category}
          </option>
          <option value={"Image"}>Image</option>
          <option value={"Joke"}>Joke</option>
          <option value={"Blog"}>Blog</option>
          <option value={"Question"}>Question</option>
          <option value={"Information"}>Information</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
