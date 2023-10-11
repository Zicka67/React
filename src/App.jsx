import { useState} from "react"


function App() {
  //hook useStat uniquement a l'intérieur des composants
  //Tab de 2 elems, le premier est la valeur, et le 2 ieme un setter pour changer la valeur
  const [count, setCount] = useState (0)

  // console.log('render')

  const increment = () => {
    setCount((count) => count + 1)
  }

  const decrement = () => {
    if ( count > 0) {
    setCount((count) => count - 1)
  } else {
    
  }

}  

  // Pour un objet
  const [person, setPerson] = useState ({
    firstname : 'John',
    lastname : 'Doe',
    age : 18
  })

  {/* Compteur */}
  const incrementAge = () => {
    setPerson({...person, age: person.age + 1 })
  }

  const decrementAge = () => {
    if ( person.age > 0) {
    setPerson({...person, age: person.age - 1 })
    } else {

    }
  }

  {/* Form */}
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const [checked, setChecked] = useState(true)
  const toggleCheck = () => {
    setChecked(!checked)
  }

  {/* CGU */}

  const [isTermAccepted, setIsTermAccepted] = useState(false)


  return  <> 
    <p>Hello !</p>

    {/* Compteur */}

    <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémente</button>

    <p>Age de {person.firstname} : {person.age}</p> 
      <button onClick={incrementAge}>Augmenter</button>
      <button onClick={decrementAge}>Réduire</button>

      {/* Form */}
    
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" defaultValue={person.firstname}/>
        <textarea value={value} onChange={handleChange} name="message" id="message" cols="30" rows="10"></textarea>
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        <button disabled={!checked}>Envoyer</button>
      </form>

      {/* CGU */}

      <form action="">
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted}/>
        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
      </form>
  
    </>

}

function CGUCheckbox ({checked, onCheck}) {
  return <div>
    <label>
      <input type="checkbox" 
        onChange={(e) => onCheck(e.target.checked)}/>
      Accepter les conditions d'utilisation
    </label>
  </div>
}


export default App