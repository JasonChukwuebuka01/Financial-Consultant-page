"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import TeamMember from '@/components/home/TeamMember';
import ValueCard from '@/components/home/ValueCard';
import AwardBadge from '@/components/home/AwardBadge';

const AboutUs = () => {

  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'CEO & Founder',
      bio: 'With over 20 years of experience in investment management...',
      image: '/team/jane-smith.jpg'
    },
    {
      name: 'John Doe',
      role: 'Chief Financial Officer',
      bio: 'John has a decade of experience in financial planning and analysis...',
      image: '/team/john-doe.jpg'
    },
    {
      name: 'Emily Johnson',
      role: 'Chief Technology Officer',
      bio: 'Emily leads our tech team with innovative solutions and a passion for technology...',
      image: '/team/emily-johnson.jpg'
    },
    {
      name: 'Michael Brown',
      role: 'Head of Marketing',
      bio: 'Michael is an expert in digital marketing and brand strategy...',
      image: '/team/michael-brown.jpg'
    },
    {
      name: 'Sarah Davis',
      role: 'Client Relations Manager',
      bio: 'Sarah ensures our clients receive top-notch service and support...',
      image: '/team/sarah-davis.jpg'
    }
  ]

  const values = [
    {
      title: 'Integrity',
      description: 'We believe in absolute transparency and ethical conduct in all our dealings. Our reputation is built on trust.',
      icon: '🎯'
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, ensuring quality in every detail.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We foster strong partnerships and teamwork to achieve shared success and growth.',
      icon: '🤝'
    },
    {
      title: 'Client Focus',
      description: 'Our clients\' success is our priority. We deliver personalized solutions that exceed expectations.',
      icon: '👥'
    }
  ]

  const awards = [
    {
      title: 'Best Investment Firm 2023',
      issuer: 'Financial Times',
      year: 2023
    },
    // Add more awards
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-20"
      >
        <h1 className="text-4xl font-bold mb-8">Our Story</h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Founded in 2005, our firm has been at the forefront of investment
          innovation. We believe in combining traditional investment wisdom
          with cutting-edge technology to deliver exceptional results for our clients.
          Our team of experts is dedicated to providing personalized solutions
          that meet the unique needs of each client. Over the years, we have
          built a reputation for excellence, integrity, and innovation in the
          financial industry. We are committed to fostering long-term relationships
          with our clients and helping them achieve their financial goals.
        </p>
      </motion.section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Recognition</h2>
        <div className="flex flex-wrap gap-6">
          {
          awards.map((award) => (
            <AwardBadge key={award.title} {...award} />
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Our Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We foster an environment of continuous learning and growth...
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/office-culture.jpg"
              alt="Office culture"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;