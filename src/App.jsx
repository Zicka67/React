import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const title = "Bonjour Davina"
const style = {color : "red"}
const showTitle = true
const todos = [
  'Presenter react',
  'Presenter JSX',
  'Créer des composants',
]

function App() {

  const handleClick = (e) => {
    console.log(e)
      alert("J'ai cliqué sur le titre")
  }
  
  return  <>  
            {/* {showTitle && suivie de ce qu'on veut afficher, si showTitle est tru ca l'affiche, false cache */}
            {/* {showTitle && <h1 onClick={handleClick} id='title' className='title' style={style}>{title}</h1>} */}
            {/* OU */}
            {/* <Title/> Pour afficher le contenu de la function Title */}
            <Title color="blue" />
            <input type="text" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga vel debitis molestias voluptates 
              temporibus enim sapiente? Impedit nihil tempora maiores deleniti ut et, sint debitis minima, id odio natus?
            </p>

            <ul>
              {todos.map (todo => (<li key={todo}>{todo}</li>))}
            </ul>

          </>
}

function Title ({color}) {
  return <h1 style={{color : color}}>Bonjour les gens</h1>
}

export default App
