import { db } from "../../../../Components/dbConnection";

export default async function postsIDPage({ params }) {
  const postParams = await params;
  const post = await db.query(`SELECT * FROM posts WHERE id =$1`, [
    postParams.id,
  ]);
  const wrangledPosts = post.rows[0];
  return (
    <>
      <div id="postPageBox">
        <h1>{wrangledPosts.name}</h1>
      </div>
    </>
  );
}
