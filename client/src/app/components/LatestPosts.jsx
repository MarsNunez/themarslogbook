import Link from "next/link";
import Card from "./Card";

const LatestPosts = () => {
  return (
    <section className="mt-8">
      <h2 className="text-4xl font-medium">Latest Posts</h2>
      <p className="text-lg mt-2 text-slate-500 font-light">
        Here some of my latest posts from this logbook, wanna see more?
      </p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-10 mb-5 text-center">
        <Link
          href={"/posts"}
          className="hover:underline underline-offset-4 w-fit mx-auto decoration-green-600 decoration-2 p-4"
        >
          See more ⇝
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
