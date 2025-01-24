import React from 'react';

export default function TitleSection({
    subTitle,
    firstTitle,
    secondTitle,
}) {
  return (
    <>
        <p className='uppercase text-sm text-center mt-3 text-gray-400'>{subTitle}</p>
        <h1 className='text-3xl font-dancing uppercase text-center'>
            {firstTitle || ''} <span className='text-yellow-500'>{secondTitle}</span>
        </h1>
    </>
  )
}
