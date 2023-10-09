import React from 'react'

const CardContainer = (props: { symbol: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <div>
        <p>{props.symbol}</p>
        <p>{props.title}</p>
    </div>
  )
}

export default CardContainer