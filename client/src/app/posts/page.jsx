import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Posts = () => {
  return (
    <section className="mx-auto max-w-7xl py-2 pb-20 min-screen-height">
      <Navbar />
      <h2 className="text-center font-medium text-3xl mt-10">All Post</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Posts;
