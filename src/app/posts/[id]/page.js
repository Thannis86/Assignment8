import { db } from "../../../../Components/dbConnection";
import Link from "next/link";
import likePosts from "../../../../Components/likeposts/likePosts";
import deletePost from "../../../../Components/deletepost/deletepost";

export default async function postsIDPage({ params }) {
  const postParams = await params;
  const brokenParams = postParams.id;
  const post = await db.query(`SELECT * FROM posts WHERE id =$1`, [
    postParams.id,
  ]);
  const wrangledPosts = post.rows[0];
  const comment = await db.query(`SELECT * FROM comments WHERE post=$1`, [
    brokenParams,
  ]);
  const wrangledComments = comment.rows;
  console.log(wrangledComments);
  return (
    <>
      <div id="postsPage">
        <div id="postPagePosts">
          <h1 id="postHead" className="Posts">
            {wrangledPosts.name}
          </h1>
          <p id="postContent" className="Posts">
            {wrangledPosts.content}
          </p>
          <p id="postsPageLikes" className="Posts">
            Likes: {wrangledPosts.likes}
          </p>
          <div id="postsButtons">
            <form action={likePosts}>
              <input type="hidden" name="id" value={wrangledPosts.id} />
              <button type="submit" className="postsButtons">
                Like
              </button>
            </form>
            <form action={deletePost}>
              <input type="hidden" name="id" value={wrangledPosts.id} />
              <button type="submit" className="postsButtons">
                Delete
              </button>
            </form>
            <Link
              href={`/posts/${wrangledPosts.id}/edit`}
              className="postsButtons"
            >
              Edit
            </Link>
            <Link
              href={`/posts/${wrangledPosts.id}/comments`}
              className="postsButtons"
            >
              Comment
            </Link>
          </div>
        </div>
        <div id="postsComments">
          {wrangledComments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
              <Link href={`/comments/${comment.id}/edit`}>Edit</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
