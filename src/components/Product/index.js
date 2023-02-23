import React from 'react'
import { Link } from 'react-router-dom';
import noImage from 'assets/no-image.png';

export default function Product({ data }) {
  return (
    data?.map((product) => {
      return (
        <Link to={`cart/${product.id}`} disabled key={product?.id}>
          <div className="card pointer p-3">
            <img 
              src={product?.image}
              width={300}
              height={300}
              loading="eager"
              alt={product?.name} 
              title={product?.name}     
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = noImage;
              }}
            />
            <div className='mt-2 d-flex justify-content-between'>
              <div>
                <span>{product?.name}</span> &#124; {' '}
                <span className='fw-semibold'>{product?.price}</span>
              </div>
              <div>
                <span className='text-danger'>{product?.off}</span>
              </div>
            </div>
          </div>
        </Link>
      )
    })
  )
}
