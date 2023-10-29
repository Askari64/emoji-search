import React from 'react'

const CardContainer = (props: { symbol: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <div className='max-w-[300px] min-w-[150px] min-h-[25px] rounded-sm border-solid border-blue-600 flex flex-col items-center space-y-2 p-4 shadow-lg my-1 bg-blue-100'>
        <h2 className='text-2xl font-bold'>{props.symbol}</h2><h2 className='text-2xl font-bold'> {props.title}</h2>
    </div>
  )
}

export default CardContainer
