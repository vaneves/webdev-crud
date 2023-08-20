import { useState } from "react";

export default function Formulario({ aoPublicar }) {

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  function aoAlterar(evento) {
    setTexto(evento.target.value);
  }

  function aoAlterarTitulo(evento) {
    setTitulo(evento.target.value);
  }

  function aoClicar() {
    aoPublicar(titulo, texto);
  }

  return (
    <form className="formulario">
      <label>Título:</label>
      <input type="text" onChange={aoAlterarTitulo} />

      <label>Texto:</label>
      <textarea onChange={aoAlterar}></textarea>
      
      <button type="button" onClick={aoClicar}>Publicar</button>
    </form>
  );
}