const MainCard = () => {
  return (
    <div className=" border-red-600 w-full main-image-height rounded-md overflow-hidden absolute top-0 -z-10">
      <div className="absolute bg-gradient-to-b from-[#0000009d] w-full h-[20vh] "></div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"
        // src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt="Main card thumbnail"
        className="h-full w-full object-cover object-center"
      />
      <div className="text-white absolute z-20 px-6 bottom-0 bg-gradient-to-t from-[#0000009d] w-full h-[27vh]">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2">
              <div className="font-light flex items-center px-4 py-[3px] rounded-full backdrop-blur-md bg-slate-300 bg-opacity-15">
                <p>Tech</p>
              </div>
              <div className="font-light flex items-center px-4 py-[3px] rounded-full backdrop-blur-md bg-slate-300 bg-opacity-15">
                <p>Life</p>
              </div>
              <div className="font-light flex items-center px-4 py-[3px] rounded-full backdrop-blur-md bg-slate-300 bg-opacity-15">
                <p>Random</p>
              </div>
            </div>
            <h2 className="text-3xl my-3">Exploring the wonders of hiking</h2>
            <p className="max-w-md font-light line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
          <div className="flex flex-col items-end font-light justify-end">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="/img/face.jpeg"
                alt="profile picture"
                className="rounded-full w-10"
              />
              <p className="text-lg">Mars Nunez</p>
            </div>
            <p>24 Jan 2024 • 10 mins read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
