import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const services = [
    {
      title: 'UX Research & Strategy',
      description: 'Deep user insights and strategic planning to create experiences that truly resonate with your audience.',
      icon: '🔍',
    },
    {
      title: 'UI Design & Prototyping',
      description: 'Beautiful, intuitive interfaces that convert visitors into customers and delight users.',
      icon: '🎨',
    },
    {
      title: 'Brand & Identity',
      description: 'Cohesive brand experiences that build trust and recognition across all touchpoints.',
      icon: '✨',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Resonate transformed our user experience completely. Our conversion rate increased by 340% within 3 months.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      content: 'The team\'s attention to detail and user-centered approach exceeded our expectations. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthLab',
      content: 'Professional, creative, and results-driven. Resonate helped us create a design system that scales beautifully.',
      rating: 5,
      avatar: '👩‍🚀',
    },
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '340%', label: 'Avg. Conversion Increase' },
    { number: '50+', label: 'Happy Clients' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-[var(--resonate-neutral-50)] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)]">
                    Digital Experience
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  We create exceptional UX/UI designs that resonate with your users and drive measurable business growth. 
                  Ready to increase your conversions by 200-400%?
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white px-8 py-6 text-lg"
                >
                  <Link to="/contact">
                    Get Your Free UX Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--resonate-secondary-main)] text-[var(--resonate-secondary-main)] hover:bg-[var(--resonate-secondary-main)] hover:text-white px-8 py-6 text-lg"
                >
                  <Link to="/case-studies">View Our Work</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-primary-light)] flex items-center justify-center text-white font-semibold">S</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--resonate-secondary-main)] to-[var(--resonate-secondary-light)] flex items-center justify-center text-white font-semibold">M</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--resonate-primary-light)] to-[var(--resonate-secondary-main)] flex items-center justify-center text-white font-semibold">E</div>
                  </div>
                  <span className="ml-3 text-sm text-muted-foreground">Trusted by 50+ companies</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Dashboard Analytics</h3>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-[var(--resonate-primary-main)]"></div>
                      ))}
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] rounded-lg opacity-20"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--resonate-primary-main)]">340%</div>
                      <div className="text-sm text-muted-foreground">Conversion Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--resonate-secondary-main)]">98%</div>
                      <div className="text-sm text-muted-foreground">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] rounded-2xl opacity-20 transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--resonate-neutral-900)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[var(--resonate-primary-main)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--resonate-neutral-200)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-[var(--resonate-primary-main)]">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive UX/UI design services that transform your digital presence 
              and create meaningful connections with your users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[var(--resonate-primary-main)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-[var(--resonate-primary-main)] hover:text-[var(--resonate-primary-dark)] font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-[var(--resonate-primary-main)]">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from the companies we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[var(--resonate-primary-main)] text-[var(--resonate-primary-main)]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free UX audit and discover how we can increase your conversions by 200-400%. 
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-[var(--resonate-primary-main)] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get Your Free UX Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--resonate-primary-main)] px-8 py-6 text-lg"
            >
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

