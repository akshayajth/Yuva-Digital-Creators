import { ArrowUpRight, ChartBar, RefreshCw, Shield, Users, Zap } from 'lucide-react';

const featuresList = [
  {
    name: 'Creative Design',
    description: 'Stunning visual experiences crafted by our young digital artisans with an eye for modern aesthetics.',
    icon: Zap
  },
  {
    name: 'Digital Innovation',
    description: 'Forward-thinking solutions leveraging cutting-edge technologies to keep you ahead of the curve.',
    icon: Shield
  },
  {
    name: 'Data-Driven Insights',
    description: 'Transform raw data into actionable intelligence with our advanced analytics framework.',
    icon: ChartBar
  },
  {
    name: 'Seamless Integration',
    description: 'Our solutions adapt effortlessly to your existing digital ecosystem for maximum efficiency.',
    icon: RefreshCw
  },
  {
    name: 'Collaborative Approach',
    description: 'We work as an extension of your team, ensuring transparent communication throughout the project.',
    icon: Users
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase font-heading">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl font-heading">
            Digital excellence reimagined
          </p>
          <p className="mt-4 max-w-2xl text-xl text-text-secondary lg:mx-auto">
            Our innovative digital solutions crafted by young visionaries to transform your brand presence.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative border border-secondary p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-4">
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-accent">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-text font-heading">{feature.name}</h3>
                  <p className="mt-2 text-base text-text-secondary">{feature.description}</p>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-sm font-medium text-accent hover:text-accent/80 flex items-center">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
