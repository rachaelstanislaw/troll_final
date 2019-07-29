import React from 'react'
import ReactDOM from 'react-dom'
import Trolls from '../components/Trolls'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme .configure({ adapter: new Adapter() });

const trolls = [
    {
        id: 1,
        name: 'Morris',
        age: 2,
        enjoys: "Long walks on the beach."
    },
    {
        id: 2,
        name: 'Paws',
        age: 4,
        enjoys: "Snuggling by the fire."
    },
    {
        id: 3,
        name: 'Mr. Meowsalot',
        age: 12,
        enjoys: "Being in charge."
    }
]
it('Trolls renders without crashing', () => {
    const div =document.createElement('div')
    ReactDOM.render(<Trolls trolls={trolls}/>, div)
})



it('Renders the trolls', ()=>{
  const component = mount(<Trolls trolls={trolls} />)
  const headings = component.find('h4 > .troll-name')
})
