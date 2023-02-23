import { Product } from 'components';
import React, { useEffect, useState } from 'react'
import { getProducts } from 'utils/API';

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    document.title = 'Home - Simple Cart';

    getProducts().then((res) => setData(res.data))
  }, [])

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center py-5'>
      <h1 className='fw-bold mb-5'>Product List</h1>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
        <Product data={data} />
      </div>
    </div>
  )
}
