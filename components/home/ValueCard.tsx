import { motion } from 'framer-motion'

interface ValueCardProps {
  title: string
  description: string
  icon: string
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg p-5 text-gray-900"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}

export default ValueCard