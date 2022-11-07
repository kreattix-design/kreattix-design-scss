import { createContext, useContext, useState } from 'react'

export interface IHelloWorld {
  text: string
}

export const HomeContext = createContext<{ textC: string }>({ textC: 'my app' })

const Helloworld = (props: IHelloWorld) => {
  const { textC } = useContext(HomeContext)
  const { text = textC } = props
  const [title, setTitle] = useState(`This is test text: ${text}`)
  return (
    <div className="text" onClick={() => setTitle('test 123')}>
      {title}
    </div>
  )
}

export default Helloworld
