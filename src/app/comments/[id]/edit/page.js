import { db } from "../../../../../Components/dbConnection";
import updateComments from "../../../../../Components/updateform/updateForm";

export default async function editPage({ params }) {
  const postParams = await params;
  const post = await db.query(`SELECT * FROM comments WHERE id =$1`, [
    postParams.id,
  ]);
  const wrangledPosts = post.rows[0];
  console.log(wrangledPosts);
  return (
    <>
      <form id="postForm" action={updateComments}>
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
          placeholder={wrangledPosts.comment}
          name="comment"
          id="comment"
          value={wrangledPosts.comment || "Default Content"}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
