import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director & Founder',
      bio: 'With over 10 years of experience in UX/UI design, Alex leads our creative vision and ensures every project exceeds expectations.',
      avatar: '👨‍💼',
      skills: ['UX Strategy', 'Design Leadership', 'User Research']
    },
    {
      name: 'Sarah Kim',
      role: 'Senior UX Designer',
      bio: 'Sarah specializes in user research and information architecture, bringing deep insights to every project.',
      avatar: '👩‍💻',
      skills: ['User Research', 'Information Architecture', 'Usability Testing']
    },
    {
      name: 'Marcus Johnson',
      role: 'Senior UI Designer',
      bio: 'Marcus creates beautiful, functional interfaces that delight users and drive conversions.',
      avatar: '👨‍🎨',
      skills: ['Visual Design', 'Design Systems', 'Prototyping']
    },
    {
      name: 'Elena Rodriguez',
      role: 'UX Researcher',
      bio: 'Elena uncovers user insights that inform our design decisions and drive project success.',
      avatar: '👩‍🔬',
      skills: ['User Interviews', 'Data Analysis', 'Behavioral Psychology']
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'User-Centered',
      description: 'Every decision we make is guided by deep understanding of user needs and behaviors.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results-Driven',
      description: 'We measure success by the tangible business results our designs achieve for clients.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passionate',
      description: 'We love what we do and it shows in the quality and creativity of our work.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every pixel, interaction, and user journey we create.'
    }
  ];

  const process = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      description: 'We start by understanding your business goals, target audience, and current challenges through stakeholder interviews and user research.',
      activities: [
        'Stakeholder interviews',
        'User research and analysis',
        'Competitive analysis',
        'Technical requirements gathering'
      ]
    },
    {
      phase: 'Strategy',
      duration: '1-2 weeks',
      description: 'Based on our research, we develop a comprehensive strategy that aligns user needs with business objectives.',
      activities: [
        'User persona development',
        'User journey mapping',
        'Information architecture',
        'Content strategy'
      ]
    },
    {
      phase: 'Design',
      duration: '4-8 weeks',
      description: 'We create wireframes, prototypes, and high-fidelity designs that bring the strategy to life.',
      activities: [
        'Wireframing and prototyping',
        'Visual design and branding',
        'Design system creation',
        'Usability testing'
      ]
    },
    {
      phase: 'Delivery',
      duration: '1-2 weeks',
      description: 'We prepare all design assets and documentation for development, ensuring smooth handoff and implementation.',
      activities: [
        'Design specification documentation',
        'Asset preparation and optimization',
        'Developer handoff and support',
        'Quality assurance and testing'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">
                We Create Digital Experiences That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)]">
                  Resonate
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Founded in 2019, Resonate has been helping companies transform their digital presence 
                through exceptional UX/UI design. We believe that great design isn't just about how 
                something looks—it's about how it works and how it makes people feel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--resonate-primary-main)] hover:bg-[var(--resonate-primary-dark)] text-white px-8 py-6 text-lg"
                >
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--resonate-secondary-main)] text-[var(--resonate-secondary-main)] hover:bg-[var(--resonate-secondary-main)] hover:text-white px-8 py-6 text-lg"
                >
                  <Link to="/case-studies">Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-[var(--resonate-primary-main)] to-[var(--resonate-primary-light)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    200+
                    <span className="text-sm ml-2">Projects</span>
                  </div>
                  <div className="h-24 bg-gradient-to-br from-[var(--resonate-secondary-main)] to-[var(--resonate-secondary-light)] rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    98% Satisfaction
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-24 bg-gradient-to-br from-[var(--resonate-primary-light)] to-[var(--resonate-secondary-main)] rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    5 Years
                  </div>
                  <div className="h-32 bg-gradient-to-br from-[var(--resonate-secondary-light)] to-[var(--resonate-secondary-main)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    50+
                    <span className="text-sm ml-2">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-[var(--resonate-primary-main)]">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we approach every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-[var(--resonate-primary-main)] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--resonate-neutral-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Meet Our <span className="text-[var(--resonate-primary-main)]">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of designers, researchers, and strategists brings together years of experience 
              and a passion for creating exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-[var(--resonate-primary-main)] font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-[var(--resonate-primary-main)] bg-opacity-10 text-[var(--resonate-primary-main)] rounded-full text-xs font-medium mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-[var(--resonate-primary-main)]">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology that ensures exceptional results and keeps you involved every step of the way.
            </p>
          </div>

          <div className="space-y-12">
            {process.map((phase, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:order-3' : ''}`}>
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                        <span className="text-sm text-[var(--resonate-primary-main)] font-medium bg-[var(--resonate-primary-main)] bg-opacity-10 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-[var(--resonate-primary-main)] rounded-full mr-3"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="text-8xl font-bold text-[var(--resonate-neutral-100)] absolute -top-8 -left-4 z-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="relative z-10 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] rounded-2xl p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">{phase.phase} Phase</h3>
                      <p className="text-lg opacity-90">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--resonate-primary-main)] to-[var(--resonate-secondary-main)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
            To create digital experiences that not only look beautiful but also solve real problems, 
            drive business growth, and make a positive impact on people's lives. We believe that 
            great design has the power to transform businesses and create meaningful connections 
            between brands and their users.
          </p>
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

