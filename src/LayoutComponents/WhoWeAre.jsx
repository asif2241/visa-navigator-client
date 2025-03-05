const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] md:w-4/5 w-11/12  mx-auto bg-red-300 py-10 md:px-14 px-5 gap-10 my-16">
      {/* <h2 className="text-3xl mx-auto font-bold">Who We Are?</h2> */}
      {/* left */}
      <div className="flex-1 md:border-r-2 md:border-dashed bg-white lg:p-10 p-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-500">
          Your Trusted Partner in <br /> Global Travel
        </h2>
        <p className="text-gray-600">
          At Visa Navigator, we are more than just a travel agency – we are your
          gateway to the world. With years of expertise in visa processing and
          travel planning, we are dedicated to making your journey seamless and
          stress-free. Whether you're traveling for business, leisure, or
          adventure, our team is here to guide you every step of the way. Let us
          handle the complexities so you can focus on exploring the world with
          confidence.
        </p>
      </div>
      {/* right */}
      <div className="flex-1 space-y-5 bg-white  lg:p-10 p-5">
        {/* 1 */}
        <div className="flex gap-5">
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=zFA1PA28L4WT&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 text-gray-500">
              Visa Consultation
            </h3>
            <p className="text-gray-600">
              There are many variations of passages of but the majority have in
              some form
            </p>
          </div>
        </div>
        {/*  */}
        {/* 1 */}
        <div className="flex gap-5">
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=4waEOQFOTv0s&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 text-gray-500">
              Visa Consultation
            </h3>
            <p className="text-gray-600">
              There are many variations of passages of but the majority have in
              some form
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default WhoWeAre;
