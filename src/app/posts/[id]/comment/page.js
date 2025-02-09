import commentSubmit from "../../../../../Components/formsubmit/commentsubmit";

export default function commentPage() {
  "use client";
  return (
    <>
      <form id="postForm" action={commentSubmit}>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Comment"></input>
      </form>
    </>
  );
}
