import React from 'react'
import cn from 'classnames'


type TextProps = {
  text: string
  className?: string
}

function Text(props: TextProps): React.JSX.Element {
  const {text, className} = props
  return (
    <p className={cn(className, "text-white text-center")}>{text}</p>
  )
}

export default Text