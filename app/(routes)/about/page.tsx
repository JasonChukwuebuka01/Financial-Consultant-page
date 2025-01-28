"use client";


import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function AboutPage() {



  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <header className="relative h-screen w-full">
        <img 
          src="https://img.freepik.com/free-photo/african-man-black-suit_1157-45559.jpg"
          alt="Business Professional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="container mx-auto h-full flex items-center px-8">
            <motion.div
              className="max-w-2xl text-white space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <nav className="text-sm text-gray-300 flex items-center space-x-2">
                <Link href="/" className="hover:underline hover:text-white transition duration-300">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">About</span>
              </nav>
              <h1 className="text-5xl font-bold">Empowering Your Financial Future</h1>
              <p className="text-lg text-gray-200">
                At InvestFirm, we are dedicated to providing innovative investment solutions
                that help you achieve your financial goals. Join us on a journey towards
                financial empowerment and success.
              </p>
        
            </motion.div>
          </div>
        </div>
      </header>


      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.article
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            whileInView={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Our journey began with a vision to revolutionize the investment landscape. Over the years, we have grown and evolved, constantly adapting to the changing market dynamics. Our commitment to innovation and excellence has driven us to develop cutting-edge investment strategies that deliver consistent results. We believe in building long-term relationships with our clients, based on trust, transparency, and mutual success. Join us as we continue to pave the way for a brighter financial future. Our team of dedicated professionals works tirelessly to stay ahead of industry trends, ensuring that we provide the most effective and efficient solutions for our clients. We are passionate about empowering individuals and businesses to achieve their financial goals, and we take pride in the positive impact we have made in the lives of our clients. Our story is one of perseverance, dedication, and a relentless pursuit of excellence. We invite you to be a part of our journey and experience the difference that our expertise and commitment can make in your financial endeavors.
              As we look to the future, we remain committed to pushing the boundaries of what's possible in the world of finance. Our innovative approach and unwavering dedication to our clients' success set us apart in the industry. We are excited about the opportunities that lie ahead and are confident that together, we can achieve remarkable things. Thank you for being a part of our story, and we look forward to continuing this journey with you.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Transparency",
                description: "We believe in clear and open communication with our clients. We ensure that all our processes and decisions are transparent, providing you with the confidence and trust you need to make informed investment choices.",
              },
              {
                title: "Excellence",
                // Fixed apostrophe here
                description: "We&apos;re committed to delivering exceptional service and results. Our team strives to exceed expectations in everything we do.",
              },
              {
                title: "Innovation",
                // Fixed apostrophe here
                description: "In today&apos;s dynamic market, we&apos;re constantly evolving and adapting to bring you cutting-edge investment solutions.",
              },
            ].map((value, index) => (
              <div key={index} className="p-8 bg-white text-gray-900 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Personalized Investment Plans",
                description: "Our team of experts will work with you to create a customized investment plan tailored to your unique financial goals and risk tolerance.",
                image: "https://img.freepik.com/free-photo/african-man-black-suit_1157-45559.jpg",
              },
              {
                title: "Comprehensive Financial Advice",
                description: "We provide holistic financial advice, covering everything from retirement planning to tax optimization, ensuring you have a clear path to financial success.",
                image: "https://img.freepik.com/free-photo/two-talking-businessmen_23-2147626602.jpg",
              },
              {
                title: "Cutting-Edge Technology",
                description: "Utilize our advanced technology platform to track your investments, analyze market trends, and make informed decisions with real-time data.",
                image: "https://img.freepik.com/free-photo/business-people-checking-papers_23-2147626490.jpg",
              },
            ].map((offer, index) => (<motion.div
              key={index}
              className="p-8 bg-gray-100 text-gray-900 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img 
                src={offer.image}
                alt={offer.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Ready to Transform Your Financial Future?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Link href="/sign-up" className="inline-block">
              <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}