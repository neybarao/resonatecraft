import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ServicesPage = () => {
  const services = [
    {
      id: 'ux-research',
      title: 'UX Research & Strategy',
      description: 'Deep user insights and strategic planning to create experiences that truly resonate with your audience.',
      icon: '🔍',
      features: [
        'User interviews and surveys',
        'Competitive analysis',
        'User journey mapping',
        'Information architecture',
        'Usability testing',
        'Strategic recommendations'
      ],
      process: [
        'Discovery & Research',
        'User Analysis',
        'Strategy Development',
        'Validation & Testing'
      ],
      timeline: '2-4 weeks',
      price: '$5,000 - $15,000',
      deliverables: [
        'User research report',
        'Persona documentation',
        'User journey maps',
        'Strategic roadmap'
      ]
    },
    {
      id: 'ui-design',
      title: 'UI Design & Prototyping',
      description: 'Beautiful, intuitive interfaces that convert visitors into customers and delight users.',
      icon: '🎨',
      features: [
        'Visual design systems',
        'Interactive prototypes',
        'Responsive design',
        'Accessibility compliance',
        'Design handoff',
        'Quality assurance'
      ],
      process: [
        'Wireframing',
        'Visual Design',
        'Prototyping',
        'Testing & Refinement'
      ],
      timeline: '4-8 weeks',
      price: '$8,000 - $25,000',
      deliverables: [
        'Design system',
        'High-fidelity mockups',
        'Interactive prototypes',
        'Developer handoff files'
      ]
    },
    {
      id: 'branding',
      title: 'Brand & Identity Design',
      description: 'Cohesive brand experiences that build trust and recognition across all touchpoints.',
      icon: '✨',
      features: [
        'Brand strategy',
        'Logo design',
        'Visual identity',
        'Brand guidelines',
        'Marketing materials',
        'Digital assets'
      ],
      process: [
        'Brand Discovery',
        'Concept Development',
        'Design Execution',
        'Brand Guidelines'
      ],
      timeline: '3-6 weeks',
      price: '$6,000 - $20,000',
      deliverables: [
        'Brand strategy document',
        'Logo and variations',
        'Brand guidelines',
        'Marketing templates'
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: '$5,000 - $10,000',
      description: 'Perfect for startups and small businesses',
      features: [
        'Basic UX/UI design',
        'Responsive design',
        'Basic user research',
        '4-6 week timeline',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional Package',
      price: '$10,000 - $25,000',
      description: 'Ideal for growing companies',
      features: [
        'Comprehensive UX/UI design',
        'Advanced user research',
        'Design system creation',
        '6-10 week timeline',
        'Priority support',
        'Usability testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '$25,000+',
      description: 'For large organizations',
      features: [
        'Full-scale design transformation',
        'Extensive user research',
        'Complete design system',
        '10+ week timeline',
        'Dedicated project manager',
        'Ongoing support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)]">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive UX/UI design services that transform your digital presence and create meaningful connections with your users.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[var(--resonate-primary-main)]" />
                      <span className="text-sm">{service.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-[var(--resonate-primary-main)]" />
                      <span className="text-sm">{service.price}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[var(--resonate-primary-main)] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white"
                  >
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-center">Our Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center space-x-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--resonate-primary-main)] text-white flex items-center justify-center text-sm font-semibold">
                              {idx + 1}
                            </div>
                            <span className="font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-semibold mb-3">Deliverables:</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Choose Your <span className="text-[var(--resonate-primary-main)]">Package</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-0 shadow-xl ${pkg.popular ? 'ring-2 ring-[var(--resonate-primary-main)] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--resonate-primary-main)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-[var(--resonate-primary-main)] mt-2">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[var(--resonate-primary-main)] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full ${pkg.popular ? 'bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white' : 'bg-[var(--resonate-secondary-main)] hover:bg-[var(--resonate-secondary-dark)] text-white'}`}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-[var(--resonate-primary-main)]">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Starter packages typically take 4-6 weeks, Professional packages 6-10 weeks, and Enterprise projects 10+ weeks."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! We work with clients worldwide and have experience collaborating across different time zones and cultures."
              },
              {
                question: "What's included in the free UX audit?",
                answer: "Our free UX audit includes a comprehensive review of your current website or app, identification of key issues, and actionable recommendations for improvement."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer various support packages including design system maintenance, additional features, and optimization services."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free consultation to discuss your project and discover how we can help transform your digital experience.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[var(--resonate-primary-main)] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

