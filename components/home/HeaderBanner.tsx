"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeaderBanner = () => {



  return (
    <header className="relative h-screen w-full">
      <Image
        src="https://img.freepik.com/free-photo/business-people-checking-papers_23-2147626490.jpg"
        alt="InvestFirm Office"
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover brightness-50 w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="container mx-auto h-full flex items-center">
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
              <span className="text-white">Trading-Plans</span>
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

  )
}

export default HeaderBanner