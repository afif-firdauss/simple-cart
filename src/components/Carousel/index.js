import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import noImage from 'assets/no-image.png';

export default function Index({ product }) {
  return (
    <div>
      {product && (
        <Carousel
          showIndicators={false}
          statusFormatter={(current, total) => `${current}/${total}`}
          showArrows={false}
          showThumbs
        >
          {product.images?.map((image, index) => {
            return (
              <div key={index}>
                <img 
                  src={image} 
                  alt={`${product.name} ${index}`}
                  title={product?.name}
                  loading="eager"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = noImage;
                  }}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  )
}
