import { db } from "../../../../Components/dbConnection";

export default async function commentsPage({ params }) {
  const postParams = await params;
  const brokenParams = postParams.id;
  const comment = await db.query(`SELECT * FROM comments WHERE post=$1`, [
    brokenParams,
  ]);
  const wrangledComments = comment.rows[0];
  console.log(wrangledComments);
  return (
    <>
      <div id="commentsPageComments">
        <p className="commentsPageComments">{wrangledComments.name}</p>
        <p className="commentsPageComments">{wrangledComments.comment}</p>
      </div>
    </>
  );
}
