import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Startup',
    price: '499',
    description: 'Essential digital presence for new ventures',
    features: [
      'Responsive website design',
      'Basic SEO optimization',
      'Social media integration',
      'Content management system',
      'Email setup'
    ],
    cta: 'Get started',
    highlighted: false
  },
  {
    name: 'Growth',
    price: '999',
    description: 'Comprehensive digital solutions for scaling businesses',
    features: [
      'Advanced website with custom features',
      'Complete SEO strategy',
      'Content marketing plan',
      'Analytics dashboard',
      'Social media management',
      'Email marketing automation',
      'Priority support'
    ],
    cta: 'Get started',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale digital transformation for established organizations',
    features: [
      'Custom digital platform development',
      'Enterprise-level SEO & marketing',
      'Advanced analytics & reporting',
      'Dedicated account manager',
      'Custom integrations',
      'Multi-platform strategy',
      'Digital innovation consulting',
      'Quarterly strategy reviews'
    ],
    cta: 'Contact us',
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase font-heading">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl font-heading">
            Digital transformation packages
          </p>
          <p className="mt-4 max-w-2xl text-xl text-text-secondary sm:mx-auto">
            Select the ideal digital solution for your business growth. All packages include a complimentary consultation.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`border rounded-lg shadow-sm divide-y divide-secondary ${
                plan.highlighted 
                  ? 'border-accent ring-2 ring-accent' 
                  : 'border-secondary'
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-text font-heading">{plan.name}</h2>
                <p className="mt-4 text-text-secondary">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-text">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-text-secondary">/month</span>}
                </p>
                <a
                  href="#contact"
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    plan.highlighted
                      ? 'bg-accent text-white hover:bg-accent/90'
                      : 'bg-secondary text-accent hover:bg-secondary/80'
                  } transition-colors`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-medium text-text tracking-wide uppercase font-heading">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-accent" />
                      <span className="ml-3 text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
