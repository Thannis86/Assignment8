"use server";

import { db } from "../dbConnection";

export default async function updateComments(formvalues) {
  db.query(
    `UPDATE posts SET name = $1, comment = $2 
    WHERE id = $3`,
    [formvalues.get("name"), formvalues.get("comment"), formvalues.get("id")]
  );
}
