import React from 'react'
import cn from 'classnames'

type EmailInputProps = {
  id: string
  name: string
  placeholder: string
  inputClassName?: string
}

function EmailInput(props: EmailInputProps): React.JSX.Element {
  const { id, name, placeholder, inputClassName } = props
  return (
    <div className="w-full flex flex-col">
      <input type='email' id={id} name={name} placeholder={placeholder} className={cn(inputClassName, 'p-4 placeholder:font-bold rounded-md border border-gray-200')} />
    </div>
  )
}

export default EmailInput