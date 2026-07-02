import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Video, Briefcase, Rocket, Building2, BookOpen, DollarSign, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import StreamCard from '@/components/StreamCard.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const ProgramsPage = () => {
  const foundationModules = [{
    icon: Heart,
    title: 'Spirituality',
    description: 'Develop a strong moral compass and purpose-driven leadership grounded in values and ethical principles.'
  }, {
    icon: DollarSign,
    title: 'Financial Intelligence',
    description: 'Master personal finance, investment strategies, and economic thinking essential for leadership.'
  }, {
    icon: BookOpen,
    title: 'Personal Development',
    description: 'Build self-awareness, emotional intelligence, and the habits of highly effective leaders.'
  }];
  const streams = [{
    icon: Briefcase,
    title: 'Careers Stream',
    description: 'Designed for ambitious professionals aiming for C-suite and senior leadership roles in top organizations across Africa.',
    outcomes: ['Strategic thinking', 'Executive presence', 'Industry expertise', 'Leadership networks']
  }, {
    icon: Rocket,
    title: 'Ventures Stream',
    description: 'For entrepreneurs building scalable businesses that solve real problems and create economic opportunities.',
    outcomes: ['Business validation', 'Fundraising skills', 'Growth strategies', 'Founder community']
  }, {
    icon: Building2,
    title: 'Government Stream',
    description: 'Preparing leaders to drive policy reform, public sector innovation, and transformative governance change.',
    outcomes: ['Policy expertise', 'Public leadership', 'Reform strategies', 'Civic networks']
  }];
  const deliveryModel = [{
    icon: Video,
    title: 'Virtual Core Sessions',
    description: 'Weekly online sessions covering foundation modules and stream-specific content.'
  }, {
    icon: MapPin,
    title: 'Excursion',
    description: 'Immersive field experience to learn from successful leaders and organizations.'
  }, {
    icon: Users,
    title: 'Midpoint Check-in',
    description: 'In-person gathering to assess progress, build connections, and recalibrate goals.'
  }, {
    icon: Calendar,
    title: 'December Gala',
    description: 'Annual celebration bringing together fellows, alumni, mentors, and partners.'
  }];
  const timeline = [{
    phase: 'Application',
    duration: 'Rolling',
    description: 'Submit your application and complete screening process'
  }, {
    phase: 'Selection',
    duration: '2 weeks',
    description: 'Review and selection of 80-100 fellows per cohort'
  }, {
    phase: 'Bootcamp',
    duration: '4-6 weeks',
    description: 'Intensive program with foundation modules and stream specialization'
  }, {
    phase: 'Alumni Network',
    duration: 'Ongoing',
    description: 'Lifetime access to community, mentorship, and opportunities'
  }];
  return <>
      <Helmet>
        <title>Programs - Novola Charity Foundation</title>
        <meta name="description" content="Explore our fellowship programs designed to develop African leaders through intensive bootcamps, mentorship, and specialized streams." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Global Leaders Fellowship</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A transformative 6-month intensive program combining foundational leadership development with specialized training in careers, ventures, or government.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="mb-6">Bootcamp structure</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Each cohort brings together 80-100 carefully selected fellows for an intensive bootcamp experience. The program combines virtual learning with strategic in-person touchpoints to maximize impact while maintaining accessibility.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fellows are organized into mentor pods led by senior leaders who provide personalized guidance, accountability, and industry insights throughout the journey.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <img src="https://images.unsplash.com/photo-1691886275771-f037ea78f03e" alt="Fellows collaborating during bootcamp session" className="w-full h-auto rounded-2xl shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Foundation Modules */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="mb-4">Foundation modules</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every fellow completes these core modules before specializing in their chosen stream.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {foundationModules.map((module, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <module.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Specialization Streams */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="mb-4">Choose your specialization</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                After completing foundation modules, fellows dive deep into their chosen stream.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {streams.map((stream, index) => <StreamCard key={index} icon={stream.icon} title={stream.title} description={stream.description} outcomes={stream.outcomes} delay={index * 0.1} />)}
            </div>
          </div>
        </section>

        {/* Hybrid Delivery Model */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="mb-4">Hybrid delivery model</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Combining the best of virtual learning with strategic in-person experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryModel.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 mb-4">
                        <item.icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Mentor Pod Model */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <img src="https://images.unsplash.com/photo-1565841327798-694bc2074762" alt="Mentor guiding fellows in small group setting" className="w-full h-auto rounded-2xl shadow-lg" />
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="mb-6">Mentor pod model</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every fellow is assigned to a small mentor pod led by a senior leader with proven expertise in their chosen stream. These pods meet regularly throughout the bootcamp for personalized guidance, peer learning, and accountability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mentors are carefully selected based on their track record of leadership, commitment to developing others, and alignment with Novola's values. The pod structure ensures every fellow receives individual attention while building deep relationships with peers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="mb-4">Program timeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From application to alumni network, here's what to expect.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {timeline.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-semibold text-primary">{item.duration}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                    <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold mb-2">{item.phase}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="mb-4">Success metrics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We measure our impact through tangible outcomes and fellow achievements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-lg font-semibold mb-2">Completion Rate</div>
                  <p className="text-sm text-muted-foreground">Fellows who finish the program</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">87%</div>
                  <div className="text-lg font-semibold mb-2">Career Advancement</div>
                  <p className="text-sm text-muted-foreground">Alumni in senior roles within 2 years</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">42</div>
                  <div className="text-lg font-semibold mb-2">Ventures Launched</div>
                  <p className="text-sm text-muted-foreground">Alumni-founded businesses</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default ProgramsPage;