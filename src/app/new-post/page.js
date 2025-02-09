import formSubmit from "../../../Components/formsubmit/formsubmit";

export default function newPost() {
  "use client";

  return (
    <>
      <form id="postForm" action={formSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          id="name"
        ></input>
        <input
          type="text"
          placeholder="Your Post"
          name="content"
          id="content"
        ></input>
        <select name="category" id="category">
          <option value={"null"}>Category</option>
          <option value={"Image"}>Image</option>
          <option value={"Joke"}>Joke</option>
          <option value={"Blog"}>Blog</option>
          <option value={"Question"}>Question</option>
          <option value={"Information"}>Information</option>
        </select>
        <input type="file"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
