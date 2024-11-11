import { useState } from "react"
import "./Style.scss"
export default function App() {
  //variavel de estado
  const [primeiroValor, setSegundoValor] =useState()
  return (
    <main>
      <h1>Calculadora</h1>
      <input type="number" placeholder="Insira um número" />
      <input type="number" placeholder="Insira um número" />
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}