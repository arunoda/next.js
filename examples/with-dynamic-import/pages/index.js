import React from 'react'
import Header from '../components/Header'
import Counter from '../components/Counter'
import {asyncReactor} from 'async-reactor'

function HelloLoader () {
  return <p>Hello ...</p>
}

const HelloComponent = asyncReactor(async function ({number = 1}) {
  const Component = await import(`../components/hello${number}`)

  return Component
}, HelloLoader)

export default () => (
  <div>
    <Header />
    <HelloComponent number={1} name='Sven' />
    <HelloComponent number={2} name='Arunoda' />
    <p>HOME PAGE is here!</p>
    <Counter />
  </div>
)
