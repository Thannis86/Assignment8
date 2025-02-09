"use server";

import { db } from "../dbConnection";

export default async function deletePost(formvalues) {
  const id = formvalues.get("id");
  db.query(`DELETE FROM posts WHERE id = $1`, [id]);
}
