import { db } from "../../../Components/dbConnection";

export default async function commentsPage() {
  const comment = await db.query(`SELECT * FROM comments`);
  return (
    <>
      <div></div>
    </>
  );
}
