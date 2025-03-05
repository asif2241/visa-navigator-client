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
      {/* Extra section 1 */}
      <section>
        <WhoWeAre></WhoWeAre>
        <WhyChooseUs></WhyChooseUs>
      </section>
    </div>
  );
};

export default Home;
