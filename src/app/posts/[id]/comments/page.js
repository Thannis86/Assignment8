import commentSubmit from "../../../../../Components/formsubmit/commentsubmit";

export default async function commentPage({ params }) {
  "use client";
  const newParams = await params;
  const brokenParams = newParams.id;
  console.log(brokenParams);

  return (
    <>
      <form id="postForm" action={commentSubmit}>
        <input type="hidden" name="id" value={brokenParams}></input>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="text" name="comment" placeholder="Comment"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
