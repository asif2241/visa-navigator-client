import LatestVisa from "../LayoutComponents/LatestVisa";
import Slider from "../LayoutComponents/Slider";
import WhoWeAre from "../LayoutComponents/WhoWeAre";
import WhyChooseUs from "../LayoutComponents/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* slider section */}
      <section>
        <Slider></Slider>
      </section>
      {/* Extra section */}
      <section>
        <WhoWeAre></WhoWeAre>
        <WhyChooseUs></WhyChooseUs>
      </section>
      {/* latest visa section */}
      <section className="w-4/5 mx-auto my-10">
        <LatestVisa></LatestVisa>
      </section>
    </div>
  );
};

export default Home;
