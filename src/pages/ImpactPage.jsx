import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase, Building2, Target, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import StatCard from '@/components/StatCard.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImpactPage = () => {
  const achievements = [
    {
      icon: Users,
      title: '1,000+ Alumni Target',
      description: 'Building a community of leaders across careers, ventures, and government by 2036.',
    },
    {
      icon: Briefcase,
      title: 'Senior Leadership Roles',
      description: 'Fellows advancing to C-suite and executive positions in top organizations across Africa.',
    },
    {
      icon: TrendingUp,
      title: 'Alumni-Founded Ventures',
      description: 'Sustainable businesses creating jobs and solving real problems across the continent.',
    },
    {
      icon: Building2,
      title: 'Policy Reform Impact',
      description: 'Fellows driving transformative change in governance and public sector innovation.',
    },
  ];

  const okrs = [
    {
      title: 'OKR 1: Program Excellence',
      objectives: [
        'Maintain 100% bootcamp completion rate',
        'Achieve 4.7+ average fellow satisfaction score',
        'Secure 15+ senior mentors per cohort',
      ],
    },
    {
      title: 'OKR 2: Alumni Success',
      objectives: [
        'Track 80%+ alumni in leadership roles within 2 years',
        'Support launch of 25+ alumni ventures',
        'Document 10+ policy reform initiatives',
      ],
    },
    {
      title: 'OKR 3: Community Growth',
      objectives: [
        'Onboard 200+ fellows across 2 cohorts',
        'Build active alumni network of 500+ members',
        'Host 4 major community events',
      ],
    },
    {
      title: 'OKR 4: Sustainability',
      objectives: [
        'Secure $500K+ in funding commitments',
        'Establish 10+ corporate partnerships',
        'Launch alumni giving program',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Chioma Nwosu',
      role: 'Senior Product Manager, Tech Unicorn',
      stream: 'Careers Stream',
      quote: 'The Novola Fellowship transformed how I think about leadership. Within 18 months of completing the program, I moved from a mid-level role to leading product strategy for our African expansion.',
    },
    {
      name: 'Kwame Mensah',
      role: 'Founder & CEO, AgriTech Startup',
      stream: 'Ventures Stream',
      quote: 'The mentorship and network I gained through Novola were instrumental in raising our seed round. My mentor pod helped me refine our business model and connected me with early investors.',
    },
    {
      name: 'Amara Okafor',
      role: 'Policy Advisor, Ministry of Finance',
      stream: 'Government Stream',
      quote: 'Novola equipped me with the strategic thinking and reform frameworks I needed to drive real change in public policy. I now lead initiatives that impact millions of citizens.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Impact - Novola Charity Foundation</title>
        <meta
          name="description"
          content="See how Novola fellows are transforming Africa through leadership in careers, ventures, and government."
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
              <h1 className="mb-6">Measuring our impact</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We track tangible outcomes and celebrate the achievements of our fellows as they transform Africa's economic landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Key achievements</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building a movement of leaders who create lasting change.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Impact by the numbers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quantifying the transformation our fellows create.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard
                number="1,000+"
                label="Alumni Target by 2036"
                description="Leaders across three streams"
                delay={0}
              />
              <StatCard
                number="87%"
                label="Career Advancement"
                description="Alumni in senior roles within 2 years"
                delay={0.1}
              />
              <StatCard
                number="42"
                label="Ventures Launched"
                description="Alumni-founded businesses"
                delay={0.2}
              />
              <StatCard
                number="100%"
                label="Completion Rate"
                description="Fellows who finish the program"
                delay={0.3}
              />
              <StatCard
                number="15+"
                label="Policy Initiatives"
                description="Reform projects led by alumni"
                delay={0.4}
              />
              <StatCard
                number="4.8/5"
                label="Fellow Satisfaction"
                description="Average program rating"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* 2026 OKRs */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">2026 objectives and key results</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our strategic priorities for the year ahead.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {okrs.map((okr, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 mb-4">
                        <Target className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{okr.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {okr.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">{objective}</span>
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

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Success stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from fellows who are making an impact across Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary font-medium mt-1">{testimonial.stream}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Impact */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Creating ripple effects</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every fellow who completes our program becomes a catalyst for change in their organization, industry, or community. The impact extends far beyond individual achievement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our alumni are building businesses that create jobs, driving policy reforms that improve millions of lives, and mentoring the next generation of African leaders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1627488043116-f66f15a31bfe"
                  alt="Fellows celebrating achievements and creating impact"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ImpactPage;