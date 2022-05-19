import React from 'react'

interface DishImageProps {
  url: string
}

const DishImage:React.FC<DishImageProps> = ({url}) => {
  return (
    <>
      <div className="dish-info__image back bg-cover bg-center h-60" style={{'backgroundImage': `url(${url})`}}></div>
    </>
  )
}

export default DishImage
