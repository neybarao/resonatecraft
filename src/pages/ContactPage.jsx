import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    auditRequest: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'hello@resonatecraft.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm EST'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: '123 Design Street, Creative District, CD 12345',
      description: 'Our office is open for meetings'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  const projectTypes = [
    'Website Redesign',
    'Mobile App Design',
    'E-commerce Platform',
    'SaaS Dashboard',
    'Brand Identity',
    'UX Research',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                We've received your message and will get back to you within 24 hours. 
                {formData.auditRequest && " We'll also prepare your free UX audit and include it in our response."}
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Create Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)]">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your digital experience? Get in touch with us today and receive a free UX audit 
              that will show you exactly how to increase your conversions by 200-400%.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free UX Audit</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll provide a comprehensive UX audit along with our proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--resonate-primary-main)] focus:border-transparent outline-none transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--resonate-primary-main)] focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--resonate-primary-main)] focus:border-transparent outline-none transition-all"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--resonate-primary-main)] focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--resonate-primary-main)] focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--resonate-primary-main)] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="auditRequest"
                        name="auditRequest"
                        checked={formData.auditRequest}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[var(--resonate-primary-main)] border-gray-300 rounded focus:ring-[var(--resonate-primary-main)]"
                      />
                      <label htmlFor="auditRequest" className="text-sm">
                        Yes, I want a free UX audit of my current website/app (recommended)
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white py-4 text-lg"
                    >
                      Send Message & Get Free Audit
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll respond within 24 hours with your free UX audit and project proposal.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                  <p className="opacity-90 mb-6">
                    Ready to start your project? We're here to help you transform your digital experience.
                  </p>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-white opacity-80">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="opacity-90">{info.details}</p>
                          <p className="text-sm opacity-75">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[var(--resonate-primary-main)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">We Review Your Request</h4>
                        <p className="text-sm text-muted-foreground">Our team analyzes your project requirements and current digital presence.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[var(--resonate-primary-main)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Free UX Audit</h4>
                        <p className="text-sm text-muted-foreground">We prepare a comprehensive UX audit with actionable recommendations.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[var(--resonate-primary-main)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Strategy Call</h4>
                        <p className="text-sm text-muted-foreground">We schedule a call to discuss your audit results and project proposal.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a 30-minute strategy call to discuss your project in detail.
                  </p>
                  <Button 
                    className="w-full bg-[var(--resonate-secondary-main)] hover:bg-[var(--resonate-secondary-dark)] text-white"
                  >
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Common <span className="text-[var(--resonate-primary-main)]">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How much does a typical project cost?",
                answer: "Our projects typically range from $5,000 to $50,000+ depending on scope and complexity. We offer flexible packages to fit different budgets and needs."
              },
              {
                question: "How long does a project take?",
                answer: "Most projects take 6-12 weeks from start to finish. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! We love working with startups and offer special packages designed for early-stage companies with limited budgets but big ambitions."
              },
              {
                question: "What's included in the free UX audit?",
                answer: "Our free UX audit includes a comprehensive review of your current website or app, identification of conversion barriers, usability issues, and actionable recommendations for improvement."
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
    </div>
  );
};

export default ContactPage;

