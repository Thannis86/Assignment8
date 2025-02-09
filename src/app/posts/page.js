import { db } from "../../../Components/dbConnection";
import Link from "next/link";
import likePosts from "../../../Components/likeposts/likePosts";
import deletePost from "../../../Components/deletepost/deletepost";

export default async function postsPage({ searchParams }) {
  "use client";

  const query = await db.query(`SELECT * FROM posts`);
  const wrangledData = query.rows;
  const newQuery = await searchParams;

  // Sort

  if (newQuery?.sort === "desc") {
    wrangledData.sort((a, b) => b.id - a.id); // Higher ID first
  } else {
    wrangledData.sort((a, b) => a.id - b.id); // Lower ID first
  }

  //
  return (
    <>
      <h1 id="postsTitle">Posts</h1>
      <div id="posts">
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
              <form action={deletePost}>
                <input type="hidden" name="id" value={posts.id} />
                <button type="submit">delete</button>
              </form>
              <Link href={`/posts/${posts.id}/edit`}>Edit</Link>
              <Link href={`/posts/${posts.id}/comment`}>Comment</Link>
            </div>
          </div>
        ))}
      </div>
      <div id="sortPosts">
        <Link href={`/posts?sort=asc`}>New-Old</Link>
        <Link href={`/posts?sort=desc`}>Old-New</Link>
      </div>
    </>
  );
}
