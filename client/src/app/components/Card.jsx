import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/posts/10"} className="group">
      <div className="relative w-full">
        <figure className="h-60 rounded-md overflow-hidden">
          <img
            src="https://cdn.britannica.com/94/125794-050-FB09B3F4/Hikers-Gore-Range-Mountains-Denver.jpg"
            alt="card thumbnail"
            className="object-cover h-full w-full group-hover:scale-110 duration-300"
          />
        </figure>
        <div className="absolute top-0 p-3 flex gap-2 flex-wrap">
          <div className="text-white flex w-fit items-center px-4 py-[5px] text-xs  rounded-full backdrop-blur-md bg-slate-900 bg-opacity-20">
            <p>Tech</p>
          </div>
          <div className="text-white flex w-fit items-center px-4 py-[5px] text-xs  rounded-full backdrop-blur-md bg-slate-900 bg-opacity-20">
            <p>Tech</p>
          </div>
          <div className="text-white flex w-fit items-center px-4 py-[5px] text-xs  rounded-full backdrop-blur-md bg-slate-900 bg-opacity-20">
            <p>Tech</p>
          </div>
        </div>
        <div className="py-3">
          <p className="text-gray-500 text-sm">24 Jan 2024 • 10 mins read</p>
          <h3 className="text-xl font-medium mt-2">
            Unveliving the Secrets Beyond the Tourist Trails
          </h3>
          <p className="text-sm line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div className="flex gap-2 items-center mt-4">
            <img
              src="/img/face.jpeg"
              alt="profile picture"
              className="rounded-full w-8"
            />
            <p className="text-sm font-medium">Mars Nunez</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
