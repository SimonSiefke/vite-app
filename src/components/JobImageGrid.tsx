import React from 'react'

export const JobImageGrid: React.FC<{
  image1: string
  image2: string
  image3: string
  image4: string
  image5: string
  image6: string
}> = ({ image1, image2, image3, image4, image5, image6 }) => {
  return (
    <div className="JobImageGrid">
      <div className="JobImageGridItem1">
        <img src={image1} />
      </div>
      <div className="JobImageGridItem2">
        <img src={image2} />
      </div>
      <div className="JobImageGridItem3">
        <img src={image3} />
      </div>
      <div className="JobImageGridItem4">
        <img src={image4} />
      </div>
      <div className="JobImageGridItem5">
        <img src={image5} />
      </div>
      <div className="JobImageGridItem6">
        <img src={image6} />
      </div>
    </div>
  )
}
