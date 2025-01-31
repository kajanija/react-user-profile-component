import { useState } from 'react'
import "./index.css"
import UserProfile from './components/UserProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile image='/user.jpg' firstName='Nedim' LastName='Kajanija' />
      </>
  )
}

export default App
