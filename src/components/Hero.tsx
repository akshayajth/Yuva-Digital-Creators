import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-text sm:text-5xl md:text-6xl font-heading">
                <span className="block xl:inline">Innovate with</span>{' '}
                <span className="block text-accent xl:inline">digital excellence</span>
              </h1>
              <p className="mt-3 text-base text-text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                Cutting-edge SaaS solutions crafted by young visionaries to empower your digital transformation. 
                Experience how YUVA Digital can elevate your brand presence.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-accent bg-secondary hover:bg-secondary/80 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-primary transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div className="h-56 w-full bg-secondary sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <svg
            className="w-2/3 h-2/3 text-accent"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="currentColor" strokeWidth="1.5" fill="none">
              <circle cx="100" cy="100" r="70" />
              <path d="M100,30 L100,170" />
              <path d="M30,100 L170,100" />
              <path d="M50,50 L150,150" />
              <path d="M50,150 L150,50" />
              <circle cx="100" cy="100" r="40" />
              <rect x="70" y="70" width="60" height="60" rx="10" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
