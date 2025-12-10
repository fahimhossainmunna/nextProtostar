import Company from "../(user)/companyLogo/Company";
import Counter from "../(user)/counter/Counter";
import Experience from "../(user)/experience/Experience";
import Hero from "../(user)/hero/Hero";
import Testimonial from "../(user)/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Counter/>
      <Experience/>
      <Company/>
      <Testimonial/>
    </div>
  );
};

export default Home;
