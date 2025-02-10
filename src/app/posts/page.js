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
      <div id="posts">
        {wrangledData.map((posts) => (
          <div key={posts.id} className="posts">
            <p className="Posts">{posts.name}</p>
            <p className="Posts">{posts.content}</p>
            <p className="Posts">Likes: {posts.likes}</p>
            <div id="postsButtons">
              <form action={likePosts}>
                <input type="hidden" name="id" value={posts.id} />
                <button type="submit" className="postsButtons">
                  Like
                </button>
              </form>
              <form action={deletePost}>
                <input type="hidden" name="id" value={posts.id} />
                <button type="submit" className="postsButtons">
                  Delete
                </button>
              </form>
              <Link href={`/posts/${posts.id}`} className="postsButtons">
                View Post
              </Link>
              <Link href={`/posts/${posts.id}/edit`} className="postsButtons">
                Edit
              </Link>
              <Link
                href={`/posts/${posts.id}/comments`}
                className="postsButtons"
              >
                Comment
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div id="sortPosts">
        <p id="sortHead">Sort Posts By:</p>
        <Link id="sortAsc" className="sort" href={`/posts?sort=desc`}>
          New-Old
        </Link>
        <Link id="sortDesc" className="sort" href={`/posts?sort=asc`}>
          Old-New
        </Link>
      </div>
    </>
  );
}
