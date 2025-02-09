"use server";

import { db } from "../dbConnection";

export default async function formSubmit(formvalues) {
  db.query(
    `INSERT INTO posts(name, content, category)
        VALUES($1, $2, $3)`,
    [
      formvalues.get("name"),
      formvalues.get("content"),
      formvalues.get("category"),
    ]
  );
}
