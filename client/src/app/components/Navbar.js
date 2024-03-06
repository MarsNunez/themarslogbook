import Link from "next/link";

const Navbar = ({ main }) => {
  return (
    <nav className="flex justify-between px-5 py-5">
      <div className={`flex items-center gap-10 ${main && "text-white"}`}>
        <Link
          href={"/"}
          className="font-semibold text-3xl flex items-center gap-2"
        >
          <img src="/img/face.jpeg" alt="face" className="w-14 rounded-full" />
          TheMarsLogbook
        </Link>
        <ul className="flex gap-5 font-medium">
          <Link href={"/"}>Home</Link>
          <Link href={"/posts"}>Posts</Link>
          <Link href={"/about"}>About</Link>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-2xl p-2">🌚</button>
        <Link
          href={"/auth"}
          className={`rounded-md px-5 py-2 text-white mr-3 ${
            main ? "bg-white border text-black" : "bg-black"
          }`}
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
