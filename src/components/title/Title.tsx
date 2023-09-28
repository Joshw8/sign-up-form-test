import React from 'react'
import cn from 'classnames'

type TitleProps = {
  text: string
  className?: string
}

function Title(props: TitleProps): React.JSX.Element {
const {text, className} = props

  return (
    <h1 className={cn(className, "text-white text-3xl font-semibold text-center")}>
      {text}
    </h1>
  )
}

export default Title