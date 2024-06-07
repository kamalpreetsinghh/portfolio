import { testimonials } from "../data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <div className="pb-20" id="testimonials">
      <h1 className="heading">Testimonials</h1>
      <div className="flex flex-col items-center mt-6 lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
