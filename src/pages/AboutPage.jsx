import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Compass, Heart, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';
import StreamCard from '@/components/StreamCard.jsx';

const AboutPage = () => {
  const team = [
    {
      name: 'Faith Adesayo Oluwamiyi',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1671084892448-2ffba4197be2',
    },
    {
      name: 'Fisayo Adeyemi',
      role: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1702467852657-26c7a1d9fceb',
    },
    {
      name: 'Folasade Omojola',
      role: 'Partnerships Lead',
      image: 'https://images.unsplash.com/photo-1697759042423-590c7efd2476',
    },
    {
      name: 'Oluwatobi Onigbogi',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
    },
  ];

  const streams = [
    {
      icon: Target,
      title: 'Careers Stream',
      description: 'Equip fellows with the strategic thinking, executive presence, and industry expertise needed to excel in leadership roles across top organizations in Africa.',
      outcomes: ['C-suite readiness', 'Strategic leadership', 'Industry expertise', 'Executive networks'],
    },
    {
      icon: Lightbulb,
      title: 'Ventures Stream',
      description: 'Support aspiring entrepreneurs in building scalable, sustainable businesses that address real challenges and create economic opportunities across the continent.',
      outcomes: ['Business model validation', 'Fundraising skills', 'Operational excellence', 'Founder networks'],
    },
    {
      icon: Compass,
      title: 'Government Stream',
      description: 'Prepare fellows to drive policy reform, public sector innovation, and transformative change in governance and civic engagement throughout Africa.',
      outcomes: ['Policy expertise', 'Public leadership', 'Reform strategies', 'Civic networks'],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from program design to fellow selection.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success by the tangible change our fellows create in their communities and industries.',
    },
    {
      icon: Compass,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and unwavering commitment to our mission.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our approach to meet the changing needs of African leadership development.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Novola Charity Foundation</title>
        <meta
          name="description"
          content="Learn about Novola's mission to build 1,000+ African leaders by 2036 through transformative fellowship programs."
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
              <h1 className="mb-6">Building Africa's next generation of leaders</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe in the transformative power of intentional leadership development to shape Africa's economic future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By 2036, we will have developed 1,000+ African leaders who are driving economic transformation across the continent through careers, ventures, and government.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 mb-6">
                  <Compass className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Prepare ambitious young Africans for economic leadership through intensive fellowship programs that combine spiritual grounding, financial intelligence, and specialized expertise.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three Streams */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Our three streams</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each stream is designed to develop leaders in specific domains of economic impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {streams.map((stream, index) => (
                <StreamCard
                  key={index}
                  icon={stream.icon}
                  title={stream.title}
                  description={stream.description}
                  outcomes={stream.outcomes}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Meet our team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to developing Africa's next generation of leaders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Our values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and shape our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;