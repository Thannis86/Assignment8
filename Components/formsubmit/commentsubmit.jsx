"use server";

import { db } from "../dbConnection";

export default async function commentSubmit(formvalues) {
  db.query(
    `INSERT INTO comments(post, name, comment)
        VALUES($1, $2, $3)`,
    [formvalues.get("id"), formvalues.get("name"), formvalues.get("comment")]
  );
}
