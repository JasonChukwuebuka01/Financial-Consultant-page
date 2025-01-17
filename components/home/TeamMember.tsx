"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

const TeamMember = ({ name, role, bio, image }: TeamMemberProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="relative h-64 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <p className="text-gray-700">{bio}</p>
    </motion.div>
  )
}

export default TeamMember