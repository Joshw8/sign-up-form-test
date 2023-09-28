import React from 'react'
import cn from 'classnames'

type FormProps = {
  children: React.ReactNode
  className?: string
}

function Form(props: FormProps): React.JSX.Element {
  const { children, className } = props
  return (
    <form className={cn(className, "bg-white rounded-lg p-6 w-full")}>
      {children}
    </form>
  )
}

export default Form