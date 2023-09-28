import './App.css'
import Title from './components/title/Title'
import Text from './components/text/Text'
import Cta from './components/cta/Cta'
import Form from './components/form/Form'
import TextInput from './components/inputs/TextInput'
import EmailInput from './components/inputs/EmailInput'
import PasswordInput from './components/inputs/PasswordInput'

function App() {
  return (
    <div className="w-full h-screen bg-image">
      <div className="w-full h-full flex flex-col items-center justify-center px-8">
        <Title text="Learn to Code by watching others" className="mb-8"/>
        <Text text="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."/>
        <Cta wrapperClassName="my-8">
          <p className="text-center text-white">
            <strong className="">Try it free 7 days </strong> 
            then $20/mo. thereafter
          </p>
        </Cta>
        <Form className="w-full space-y-4">
          <TextInput id="firstName" name="firstName" placeholder="First Name" />
          <TextInput id="lastName" name="lastName" placeholder="Last Name" />
          <EmailInput id="email" name="email" placeholder="Email Address" />
          <PasswordInput id="password" name="password" placeholder="Password" />
        </Form>
      </div>
    </div>
  )
}

export default App
