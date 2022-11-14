import React , { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const newCategories = ['all', ...new Set(items.map((item=> item.category)))]

const App = () => {

  const [state, setState] = useState(items)
  const [category, setCategory] = useState(newCategories)
  const categoryChange = (cc) => {
    if(cc === 'all') {
      setState(items)
    } else {
      setState(()=> {
        const newInfo = items.filter((item)=> item.category === cc)
        return newInfo
      })
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories  funksiya={categoryChange} btns={category} />
        <Menu info={state} />
      </section>
    </main>
  )
}

export default App
