import slide1 from "../../src/assets/airplane-aircraft-travel-trip_53876-30273.avif";
import slide2 from "../../src/assets/close-up-man-prepared-traveling_23-2151030921.avif";
import slide3 from "../../src/assets/woman-walks-along-airport-with-suitcases_93675-131318.jpg";
import slide4 from "../../src/assets/woman-front-airport-flight-information-panel_1163-3489.jpg";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full my-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slide1}
            className="w-full max-h-[800px] object-cover brightness-75"
          />
          {/* centered text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
            <h1 className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent text-4xl lg:text-6xl lg:font-extrabold font-bold mb-4">
              Explore the World with Confidence
            </h1>
            <p className=" md:text-xl text-base text-gray-200 lg:font-semibold">
              Travel stress-free with Visa Navigator. We handle the paperwork,
              so you can focus on <br /> creating unforgettable memories across
              the globe.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full max-h-[800px] object-cover" />
          {/* centered text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
            <h1 className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent text-4xl lg:text-6xl lg:font-extrabold font-bold mb-4">
              Unlock New Horizons
            </h1>
            <p className="md:text-lg text-base text-gray-200 lg:font-semibold">
              Your passport to hassle-free travel starts here. Visa Navigator
              ensures smooth visa processing and <br /> expert travel advice for
              every destination
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slide3}
            className="w-full max-h-[800px] object-cover brightness-50"
          />
          {/* centered text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
            <h1 className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent text-4xl lg:text-6xl lg:font-extrabold font-bold mb-4">
              Your Journey, Our Guidance
            </h1>
            <p className="md:text-lg text-base text-gray-200 lg:font-semibold">
              From visa applications to dream destinations, Visa Navigator is
              your trusted partner. Let us <br /> simplify your travel plans and
              make your adventures seamless.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slide4}
            className="w-full max-h-[800px] object-cover brightness-50"
          />
          {/* centered text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
            <h1 className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent text-4xl lg:text-6xl lg:font-extrabold font-bold mb-4">
              Dream. Plan. Travel.
            </h1>
            <p className="md:text-lg text-base text-gray-200 lg:font-semibold">
              Turn your travel dreams into reality with Visa Navigator. From
              visas to itineraries, we’ve got <br /> everything covered for your
              next adventure
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
