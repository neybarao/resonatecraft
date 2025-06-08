import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 'techstart-dashboard',
      title: 'TechStart Analytics Dashboard',
      client: 'TechStart Inc.',
      category: 'SaaS Platform',
      image: '📊',
      challenge: 'TechStart needed a complex analytics dashboard that could handle massive amounts of data while remaining intuitive for non-technical users.',
      solution: 'We redesigned the entire information architecture, created a modular design system, and implemented progressive disclosure to manage complexity.',
      results: [
        { metric: 'User Engagement', value: '+340%', description: 'Time spent in dashboard' },
        { metric: 'Task Completion', value: '+85%', description: 'Successful report generation' },
        { metric: 'User Satisfaction', value: '9.2/10', description: 'Post-launch survey score' },
        { metric: 'Support Tickets', value: '-60%', description: 'Reduction in help requests' }
      ],
      timeline: '8 weeks',
      services: ['UX Research', 'UI Design', 'Prototyping'],
      testimonial: {
        quote: "Resonate transformed our complex dashboard into an intuitive experience. Our users love it, and our support tickets dropped by 60%.",
        author: "Sarah Johnson",
        role: "CEO, TechStart"
      },
      tags: ['Dashboard Design', 'Data Visualization', 'SaaS', 'B2B']
    },
    {
      id: 'innovatecorp-mobile',
      title: 'InnovateCorp Mobile App',
      client: 'InnovateCorp',
      category: 'Mobile Application',
      image: '📱',
      challenge: 'InnovateCorp\'s mobile app had poor user retention and low engagement rates, with users abandoning the onboarding process.',
      solution: 'We conducted extensive user research, redesigned the onboarding flow, and created a gamified experience to increase engagement.',
      results: [
        { metric: 'User Retention', value: '+250%', description: '30-day retention rate' },
        { metric: 'Onboarding Completion', value: '+180%', description: 'Users completing setup' },
        { metric: 'Daily Active Users', value: '+200%', description: 'Increase in DAU' },
        { metric: 'App Store Rating', value: '4.8/5', description: 'Average user rating' }
      ],
      timeline: '10 weeks',
      services: ['User Research', 'Mobile UX', 'UI Design'],
      testimonial: {
        quote: "The new mobile experience exceeded all our expectations. User engagement is through the roof, and our app store ratings have never been better.",
        author: "Michael Chen",
        role: "Product Manager, InnovateCorp"
      },
      tags: ['Mobile App', 'User Onboarding', 'Gamification', 'B2C']
    },
    {
      id: 'growthlab-ecommerce',
      title: 'GrowthLab E-commerce Platform',
      client: 'GrowthLab',
      category: 'E-commerce',
      image: '🛒',
      challenge: 'GrowthLab\'s e-commerce platform had a high cart abandonment rate and poor conversion rates, especially on mobile devices.',
      solution: 'We optimized the checkout process, improved product discovery, and created a responsive design that works seamlessly across all devices.',
      results: [
        { metric: 'Conversion Rate', value: '+320%', description: 'Overall site conversion' },
        { metric: 'Cart Abandonment', value: '-45%', description: 'Reduction in abandonment' },
        { metric: 'Mobile Sales', value: '+400%', description: 'Mobile conversion increase' },
        { metric: 'Revenue', value: '+280%', description: 'Monthly revenue growth' }
      ],
      timeline: '12 weeks',
      services: ['E-commerce UX', 'Conversion Optimization', 'Mobile Design'],
      testimonial: {
        quote: "Resonate didn't just redesign our platform - they transformed our entire business. Our revenue has increased by 280% since launch.",
        author: "Emily Rodriguez",
        role: "Founder, GrowthLab"
      },
      tags: ['E-commerce', 'Conversion Optimization', 'Mobile First', 'Revenue Growth']
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: '🚀' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '340%', label: 'Avg. Conversion Increase', icon: '📈' },
    { number: '50+', label: 'Happy Clients', icon: '🤝' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)]">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real results from real projects. See how we've helped companies transform their digital experiences and achieve measurable business growth.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-[var(--resonate-primary-main)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="space-y-12">
                {/* Case Study Header */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-[var(--resonate-neutral-50)] px-4 py-2 rounded-full mb-4">
                    <span className="text-sm font-medium text-[var(--resonate-primary-main)]">{study.category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4">{study.title}</h2>
                  <p className="text-xl text-muted-foreground">Client: {study.client}</p>
                </div>

                {/* Case Study Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Project Overview */}
                  <div className="space-y-8">
                    <div className="text-center lg:text-left">
                      <div className="text-8xl mb-6">{study.image}</div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[var(--resonate-primary-main)]">The Challenge</h3>
                      <p className="text-muted-foreground text-lg">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[var(--resonate-secondary-main)]">Our Solution</h3>
                      <p className="text-muted-foreground text-lg">{study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[var(--resonate-neutral-50)] text-[var(--resonate-primary-main)] rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{study.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{study.services.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center lg:text-left">Results That Matter</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <Card key={idx} className="border-0 shadow-lg text-center">
                          <CardContent className="p-6">
                            <div className="text-3xl font-bold text-[var(--resonate-primary-main)] mb-2">
                              {result.value}
                            </div>
                            <div className="font-semibold mb-1">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.description}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <Card className="border-0 shadow-xl bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] text-white">
                      <CardContent className="p-8">
                        <div className="text-lg italic mb-4">"{study.testimonial.quote}"</div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                            <span className="font-bold">{study.testimonial.author.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div className="text-sm opacity-90">{study.testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="border-t border-[var(--resonate-neutral-200)] pt-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our Proven <span className="text-[var(--resonate-primary-main)]">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every successful project follows our time-tested methodology that ensures exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into understanding your business, users, and goals.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive strategy based on research and insights.',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Design',
                description: 'We create beautiful, functional designs that solve real problems.',
                icon: '🎨'
              },
              {
                step: '04',
                title: 'Optimize',
                description: 'We test, refine, and optimize for maximum impact and results.',
                icon: '🚀'
              }
            ].map((process, index) => (
              <Card key={index} className="border-0 shadow-lg text-center relative">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-sm font-bold text-[var(--resonate-primary-main)] mb-2">{process.step}</div>
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-[var(--resonate-primary-main)]" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the companies that have transformed their digital experiences and achieved remarkable results with Resonate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-[var(--resonate-primary-main)] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--resonate-primary-main)] px-8 py-6 text-lg"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;

