import { useState } from "react"
// hook do react para mudanças do estado
import "./Style.scss"
export default function App() {
  // variavel de estado
  // primeiro é a variavel de estado
  // setPrimeiroValor é a função atulizadora
  const [primeiroValor, setPrimeiroValor] =useState();
  const [segundoValor, setSegundoValor] =useState();

  // arrow function () => {}
    // função especial
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value))
  }

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value))
  }
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="Insira um número" />
      <input onChange={capturandoSegundoValor} type="number" placeholder="Insira um número" />
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}