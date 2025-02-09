"use server";

import { db } from "../dbConnection";

export default async function updateForm(formvalues) {
  db.query(
    `UPDATE posts SET name = $1, content = $2, category = $3 
    WHERE id = 1`,
    [
      formvalues.get("name"),
      formvalues.get("content"),
      formvalues.get("category"),
    ]
  );
}
