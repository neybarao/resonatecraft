import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--resonate-neutral-900)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-primary-light)] rounded-sm mr-2"></div>
              <span className="text-2xl font-bold">resonate</span>
            </div>
            <p className="text-[var(--resonate-neutral-200)] mb-6 max-w-md">
              We create exceptional digital experiences that resonate with your users and drive business growth. 
              Transform your vision into reality with our expert UX/UI design services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--resonate-neutral-300)] hover:text-[var(--resonate-primary-main)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--resonate-neutral-300)] hover:text-[var(--resonate-primary-main)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--resonate-neutral-300)] hover:text-[var(--resonate-primary-main)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-[var(--resonate-neutral-200)] hover:text-[var(--resonate-primary-main)] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-[var(--resonate-neutral-200)] hover:text-[var(--resonate-primary-main)] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--resonate-neutral-200)] hover:text-[var(--resonate-primary-main)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--resonate-neutral-200)] hover:text-[var(--resonate-primary-main)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[var(--resonate-primary-main)]" />
                <span className="text-[var(--resonate-neutral-200)]">hello@resonatecraft.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[var(--resonate-primary-main)]" />
                <span className="text-[var(--resonate-neutral-200)]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-[var(--resonate-primary-main)]" />
                <span className="text-[var(--resonate-neutral-200)]">
                  123 Design Street<br />
                  Creative District, CD 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--resonate-neutral-700)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--resonate-neutral-300)] text-sm">
            © 2024 Resonate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[var(--resonate-neutral-300)] hover:text-[var(--resonate-primary-main)] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--resonate-neutral-300)] hover:text-[var(--resonate-primary-main)] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

