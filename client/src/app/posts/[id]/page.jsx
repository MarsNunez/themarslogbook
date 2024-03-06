import Navbar from "@/app/components/Navbar";

const Post = () => {
  return (
    <section className="mx-auto max-w-7xl py-2 pb-20 min-screen-height">
      <Navbar />
      <h2 className="text-center font-medium tracking-widest text-4xl my-10 uppercase">
        Unbeliving the secrets beyond the turist trails turist trails
      </h2>
      <div className="relative mt-16">
        <div className="flex absolute -top-[17px] w-full justify-center gap-x-5">
          <div className="text-white flex w-fit text-lg items-center rounded-full backdrop-blur-md bg-slate-900 bg-opacity-20 px-5 py-1">
            <p>Life</p>
          </div>
          <div className="text-white flex w-fit text-lg items-center rounded-full backdrop-blur-md bg-slate-900 bg-opacity-20 px-5 py-1">
            <p>Tech</p>
          </div>
          <div className="text-white flex w-fit text-lg items-center rounded-full backdrop-blur-md bg-slate-900 bg-opacity-20 px-5 py-1">
            <p>Random</p>
          </div>
        </div>
        <figure className="h-[70vh] w-full rounded-xl overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
            alt="title image"
            className="w-full h-full object-cover object-center"
          />
        </figure>
      </div>
      <div className="max-w-5xl mx-auto">
        <p className="mt-10 mb-5">
          24 Jan 2024 <span className="text-green-600">•</span> 10 mins read
        </p>
        <p className="first-letter:text-4xl first-letter:font-semibold text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 className="text-2xl mt-10 underline underline-offset-4 decoration-4 mb-5 decoration-green-600">
          Resources
        </h4>
        <li>
          <a
            href="https://www.youtube.com"
            className="hover:text-green-700 hover:underline"
            target="_blank"
          >
            Unbeliving the secrets beyond the turist trails
          </a>
        </li>
      </div>
    </section>
  );
};

export default Post;
