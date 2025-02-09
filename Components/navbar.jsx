import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div id="navDiv">
        <div id="navBarLinks">
          <Link href={"/"} className="navBarLinks">
            Home
          </Link>
          <Link href={"/new-post"} className="navBarLinks">
            New Post
          </Link>
          <Link href={"/posts"} className="navBarLinks">
            Posts
          </Link>
        </div>
      </div>
    </>
  );
}
