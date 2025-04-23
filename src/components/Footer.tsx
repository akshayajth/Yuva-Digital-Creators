import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="font-heading font-bold text-2xl text-text">
              YUVA<span className="text-accent">Digital</span> Creators
            </div>
            <p className="text-text-secondary text-base">
              Empowering businesses with innovative SaaS solutions designed for the modern workforce.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-text tracking-wider uppercase font-heading">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Project Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Workflow Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Analytics Platform
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Collaboration Tools
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-text tracking-wider uppercase font-heading">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-text tracking-wider uppercase font-heading">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-text tracking-wider uppercase font-heading">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-text-secondary hover:text-accent transition-colors">
                      Data Processing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary pt-8">
          <p className="text-base text-text-secondary text-center">
            &copy; {year} YUVA Digital Creators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
