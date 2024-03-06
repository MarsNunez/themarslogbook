import LatestPosts from "./components/LatestPosts";
import MainCard from "./components/MainCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl p-2 pb-10">
      <div className="relative w-full max-w-7xl main-image-height">
        <Navbar main={true} />
        <MainCard />
      </div>
      <LatestPosts />
    </main>
  );
}
