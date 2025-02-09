import { db } from "../../../Components/dbConnection";
import Link from "next/link";
import likePosts from "../../../Components/likeposts/likePosts";

export default async function postsPage() {
  "use client";

  const query = await db.query(`SELECT * FROM posts`);
  const wrangledData = query.rows;
  return (
    <>
      <h1 id="postsTitle">Posts</h1>
      {wrangledData.map((posts) => (
        <div key={posts.id} className="posts">
          <p className="postsName">{posts.name}</p>
          <p className="postsContent">{posts.content}</p>
          <p>Likes: {posts.likes}</p>
          <div className="postsButtons">
            <form action={likePosts}>
              <input type="hidden" name="id" value={posts.id} />
              <button type="submit">Like</button>
            </form>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      ))}
    </>
  );
}
