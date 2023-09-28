import React from 'react'
import cn from 'classnames'

type CtaProps = {
  children: React.ReactNode
  wrapperClassName?: string
}

function Cta(props: CtaProps): React.JSX.Element {
  const { children, wrapperClassName } = props
  return (
    <div className={cn(wrapperClassName, "bg-accent flex items-center justify-center rounded-lg shadow-[0px_10px_0px_0px_rgb(0_0_0_/_0.2)] p-6 px-12")}>
      {children}
    </div>
  )
}

export default Cta