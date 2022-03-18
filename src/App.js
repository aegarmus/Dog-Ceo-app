import  React from 'react';
import './App.css'
import SelectBreed from './components/selectBreed';
import { Cards } from './components/Cards';





function App() {

  return (
    <div className="app">
    <h1 >Raza de Perros</h1>
      < SelectBreed />
      < Cards />

    
    </div>
  )
}

export default App