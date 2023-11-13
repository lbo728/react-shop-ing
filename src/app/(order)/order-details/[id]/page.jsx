// 'use client'

import React from 'react'

const OrderDetails = ({params, searchParams}) => {
  const {hello} = searchParams;
  const {id} = params;

  console.log(id)

  return (
    <>
      <div>{id}</div>
      <br />
      {hello}
    </>
  );
}

export default OrderDetails