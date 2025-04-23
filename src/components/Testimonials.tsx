import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CMO at InnovateTech',
    content: 'YUVA Digital Creators brought a fresh perspective to our brand identity. Their creative approach and technical expertise helped us stand out in a crowded market.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Founder, GrowthBox Startup',
    content: 'We\'ve worked with several digital agencies, but YUVA Digital stands out with their innovative thinking and commitment to excellence.',
    rating: 5,
  },
  {
    name: 'Alex Rodriguez',
    role: 'Digital Marketing Director',
    content: 'The young team at YUVA Digital brings energy and cutting-edge ideas to every project. They\'ve revolutionized our digital presence.',
    rating: 4,
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase font-heading">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl font-heading">
            Success stories
          </p>
          <p className="mt-4 max-w-2xl text-xl text-text-secondary mx-auto">
            Our innovative approach has made a real difference for these forward-thinking clients
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white border border-secondary rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-secondary'}`}
                    />
                  ))}
                </div>
                <p className="mb-5 text-text-secondary italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-text font-heading">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
