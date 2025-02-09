"use server";

import { db } from "../dbConnection";

export default async function updateForm(formvalues) {
  db.query(
    `UPDATE posts(name, content, category, likes) 
        VALUES($1, $2, $3) WHERE id = 1`,
    [
      formvalues.get("name"),
      formvalues.get("content"),
      formvalues.get("category"),
    ]
  );
}
