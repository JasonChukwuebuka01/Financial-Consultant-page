import { motion } from 'framer-motion'

interface ValueCardProps {
  title: string
  description: string
  icon: string
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg p-8 text-gray-700"
    >
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}

export default ValueCard