
import Slider from 'react-slick';
import { useTheme } from '../components/ThemeContext'; // Import the custom hook to use theme

const TestimonialSlider = () => {
  const { darkMode } = useTheme(); // Access darkMode and toggleTheme from the ThemeContext

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO, Company X",
      text: "This is an amazing product! It has transformed the way we do business.",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CTO, Company Y",
      text: "I highly recommend this service. It saved us time and improved efficiency.",
    },
    {
      id: 3,
      name: "Mark Johnson",
      title: "Manager, Company Z",
      text: "Fantastic experience! The team was incredibly helpful and the results speak for themselves.",
    },
  ];

  const settings = {
    dots: true, // Add navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Speed of sliding
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };

  return (
    <div className={`w-full mt-2 mb-2 mx-auto py-8 ${darkMode ? '' : 'bg-gray-100'}`}>
      {/* Button to toggle dark mode */}


      <h2 className={`text-3xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        What Our Clients Say
      </h2>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`p-8 rounded-lg shadow-md text-center ${darkMode ? ' text-white' : 'bg-white text-gray-800'}`}
          >
            <p className={`text-xl italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "{testimonial.text}"
            </p>
            <p className={`mt-4 text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              <strong>{testimonial.name}</strong>
            </p>
            <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {testimonial.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
