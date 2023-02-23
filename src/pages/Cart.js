import { Carousel, Loader } from 'components'
import React, { lazy, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from 'utils/API'
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';

const ToastMessage = lazy(() => import('components/ToastMessage'));

export default function Cart() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState({ isShow: false, message: '' });

  useEffect(() => {
    document.title = 'Cart - Simple Cart'
    setLoading(true);

    getProducts()
      .then((res) => {
        const tempProduct = res?.data.filter((product) => product.id === id);
        if (tempProduct.length) {
          setProduct(tempProduct[0]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false))
  }, [id])

  return (
    <div className='container mt-4'>
      <ToastMessage 
        show={show.isShow} 
        toggle={() => setShow({ isShow: !show, message: '' })} 
        message={show.message} 
      />
      <span className='mt-5 pointer' onClick={() => navigate('/')}>&larr; Back</span>

      <div className='mb-5 mt-3 d-flex flex-row flex-wrap cart-container'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='col-12 col-lg-5' style={{ maxWidth: '450px' }}>
              <Carousel product={product} />
            </div>
            
            <div className='col-12 col-lg-7 p-4 mt-lg-0 mt-5'>
              <p className='text-danger'>{product?.out_of_stock ? 'out of stock' : 'SALE'}</p>
              <h4>{product?.name}</h4>
              <div className='d-flex align-items-center my-3'>
                <StarRatings
                  rating={product?.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension='20'
                  starSpacing='5' />
                <span className='fs-6 mt-1 ms-2'>({product?.reviewCount} reviews)</span>
              </div>

              {product?.specialPrice ? (
                <>
                  <span className='fs-4 fw-bold'>{product?.specialPrice}{' '}</span>
                  <sup className='fw-bold text-decoration-line-through text-danger'>{product?.price}</sup>
                </>
              ) : (
                <span className='fs-4 fw-bold'>{product?.price}</span>
              )}

              <p className='mt-3'>{product?.description}</p>

              <hr className='my-4' />

              <Button
                variant="warning"
                className='me-3 fw-bold'
                onClick={() => setShow({ isShow: true, message: `${product?.name} Success Added to Cart` })}
              >Add to cart</Button>
              <Button
                variant="success"
                className='fw-bold'
                disabled={product?.out_of_stock}
                onClick={() => setShow({ isShow: true, message: `Success Buy ${product?.name}` })}
              >
                Buy Now
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
