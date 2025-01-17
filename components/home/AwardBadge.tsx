interface AwardBadgeProps {
    title: string
    issuer: string
    year: number
  }
  
  const AwardBadge = ({ title, issuer, year }: AwardBadgeProps) => {
    return (
      <div className="bg-gray-100 rounded-full px-6 py-3">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{issuer} - {year}</p>
      </div>
    )
  }
  
  export default AwardBadge