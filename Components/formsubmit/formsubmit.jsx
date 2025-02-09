"use server";

import { db } from "../dbConnection";
import { redirect } from "next/navigation";

export default async function formSubmit(formvalues) {
  db.query(
    `INSERT INTO posts(name, content, category, likes)
        VALUES($1, $2, $3, $4)`,
    [
      formvalues.get("name"),
      formvalues.get("content"),
      formvalues.get("category"),
      0,
    ]
  );
  redirect("/posts");
}
