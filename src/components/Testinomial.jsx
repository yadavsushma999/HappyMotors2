import Slider from "react-slick";
import { useTheme } from "../components/ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const { darkMode } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "Ravi Malhotra",
      title: "IT Professional & Daily Commuter",
      text: "Finding a trustworthy garage felt impossible—until I found these guys. From the first phone call to the final key handoff, they treated my car like their own. No upselling, no jargon—just honest advice, clear updates, and quality work. My old sedan feels like it got a new life. I won’t be taking my car anywhere else.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      title: "Delivery Boy",
      text: "My bike is everything for me—I use it for deliveries every day. When it broke down, they fixed it quickly and even gave me a discount without asking. Small garage, but big-hearted people. Very helpful.",
    },
    {
      id: 3,
      name: "Mark Johnson",
      title: "School Principal",
      text: "I depend on my car every single day. When my engine started making strange noises, I panicked. These folks didn’t just fix the problem—they explained everything patiently and gave me confidence. They’ve earned my trust for life.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className={`w-full py-12 px-4 ${darkMode ? "bg-primary" : "bg-[#f6f6f6]"}`}>
      <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-white" : "text-gray-800"}`}>
        🚗 What Our Clients Say
      </h2>

      <div className={`relative max-w-3xl mx-auto px-4 md:px-8 py-10`}>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <div key={testimonial.id}>
                <div
                  className={`mx-auto w-full max-w-2xl p-8 rounded-3xl shadow-xl transition-all duration-500 ${darkMode
                      ? "bg-[#2b2b2b] text-white border border-white/10"
                      : "bg-white text-gray-800 border border-gray-200"
                    }`}
                >
                  <p
                    className={`text-lg sm:text-xl italic leading-relaxed font-serif ${darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    “{testimonial.text}”
                  </p>
                  <div className="mt-6 text-right">
                    <p className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-800"}`}>
                      — {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
