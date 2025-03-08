import { Fade } from "react-awesome-reveal";

const WhyChooseUs = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/coloredshape.svg')" }}
        className="lg:h-[800px] w-full object-cover bg-cover flex justify-center items-center  "
      >
        <div className="lg:w-4/5 w-full  mx-auto  flex flex-col lg:flex-row justify-between">
          {/* text content  */}

          <div className="text-white justify-center lg:w-[50%] w-full lg:pt-20 py-5 px-5">
            <Fade cascade damping={0.5}>
              <button className="bg-transparent  border-2 font-semibold text-xl py-2 px-4 border-white my-5">
                Why Choose Us
              </button>
              <h2 className="lg:text-6xl text-4xl font-semibold mb-5">
                We are professional Expert <br /> in Immigration
              </h2>
              <p className="text-lg font-light mb-5">
                We are more than just a travel agency – we are your gateway to
                the world. With years of expertise in visa processing and travel
                planning, we are dedicated to making your journey seamless and
                stress-free.
              </p>
            </Fade>
            <div className="flex items-center gap-5">
              <Fade cascade damping={0.5}>
                <div>
                  <img
                    src="https://img.icons8.com/?size=100&id=4waEOQFOTv0s&format=png&color=000000"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl">
                    We’re doing the right thing. <br />
                    The right way
                  </h3>
                </div>
              </Fade>
            </div>
          </div>

          {/* img  */}
          <div className=" lg:w-[50%] w-full  flex items-center">
            <img
              className="w-full lg:rounded-2xl"
              src="../../src/assets/freepik__upload__73017.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
