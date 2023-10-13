import React from 'react'

const CardContainer = (props: { symbol: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <div>
        <h2>{props.symbol}</h2>
        <h2>{props.title}</h2>
    </div>
  )
}

export default CardContainer