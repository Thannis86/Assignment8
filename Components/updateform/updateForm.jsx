"use server";

import { db } from "../dbConnection";

export default async function updateForm(formvalues) {
  db.query(
    `UPDATE comments SET name = $1, content = $2, category = $3 
    WHERE id = $4`,
    [
      formvalues.get("name"),
      formvalues.get("content"),
      formvalues.get("category"),
      formvalues.get("id"),
    ]
  );
}
