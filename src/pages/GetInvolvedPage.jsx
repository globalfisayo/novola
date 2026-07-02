import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { UserPlus, Users, Heart, Building2, MessageSquare, Search } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GetInvolvedPage = () => {
  const pathways = [
    {
      icon: UserPlus,
      title: 'Apply as Fellow',
      description: 'Join our next cohort and embark on a transformative leadership journey. Applications are reviewed on a rolling basis.',
      cta: 'Start Application',
      link: '#contact',
    },
    {
      icon: Users,
      title: 'Become a Mentor',
      description: 'Share your expertise and guide the next generation of African leaders. Mentors commit to leading a pod throughout the bootcamp.',
      cta: 'Express Interest',
      link: '#contact',
    },
    {
      icon: Heart,
      title: 'Support Our Mission',
      description: 'Make a tax-deductible donation to help us develop more leaders. Every contribution directly supports fellow scholarships and program excellence.',
      cta: 'Donate Now',
      link: '#contact',
    },
  ];

  const sponsorshipTiers = [
    {
      title: 'Platinum Partner',
      amount: '₦1,000,000+',
      benefits: [
        'Full cohort sponsorship (80-100 fellows)',
        'Exclusive access to talent pipeline',
        'Speaking slot at December Gala',
        'Logo placement on all materials',
        'Quarterly impact reports',
      ],
    },
    {
      title: 'Gold Partner',
      amount: '₦500,000+',
      benefits: [
        'Sponsor 40-50 fellows',
        'Priority access to alumni network',
        'Recognition at major events',
        'Logo on website and materials',
        'Semi-annual impact reports',
      ],
    },
    {
      title: 'Silver Partner',
      amount: '₦200,000+',
      benefits: [
        'Sponsor 15-20 fellows',
        'Access to alumni network',
        'Recognition on website',
        'Annual impact report',
      ],
    },
  ];

  const volunteerRoles = [
    {
      icon: Search,
      title: 'Screening Team',
      description: 'Review applications and conduct initial interviews with prospective fellows.',
    },
    {
      icon: MessageSquare,
      title: 'Community Management',
      description: 'Facilitate online discussions, organize virtual events, and support fellow engagement.',
    },
    {
      icon: Building2,
      title: 'Partnership Development',
      description: 'Help identify and connect with potential corporate partners and sponsors.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Get Involved - Novola Charity Foundation</title>
        <meta
          name="description"
          content="Join Novola as a fellow, mentor, donor, or partner. Help us build 1,000+ African leaders by 2036."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="mb-6">Join the movement</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're ready to lead, mentor, or support, there's a place for you in the Novola community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Engagement Pathways */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Three ways to get involved</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the path that aligns with your goals and capacity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <pathway.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{pathway.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-base leading-relaxed flex-1 mb-6">
                        {pathway.description}
                      </CardDescription>
                      <Button asChild className="w-full">
                        <a href={pathway.link}>{pathway.cta}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Sponsorship */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Corporate partnership opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with Novola to develop Africa's next generation of leaders while building your talent pipeline.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full flex flex-col ${index === 0 ? 'border-primary shadow-lg scale-105' : ''}`}>
                    <CardHeader>
                      {index === 0 && (
                        <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                          Most Popular
                        </div>
                      )}
                      <CardTitle className="text-2xl">{tier.title}</CardTitle>
                      <div className="text-3xl font-bold text-primary mt-2">{tier.amount}</div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Volunteer opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contribute your time and skills to support our mission.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {volunteerRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 mb-4">
                        <role.icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="mb-4">Get in touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to join us? Fill out the form below and we'll get back to you within 48 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GetInvolvedPage;