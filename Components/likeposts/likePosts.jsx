"use server";

import { db } from "../dbConnection";

export default async function likePosts(formvalues) {
  const id = formvalues.get("id");
  console.log("Worked");
  //   const ID = event.target.id;
  console.log(id);
  db.query(`UPDATE posts SET likes = likes +1 WHERE id = $1`, [id]);
}
