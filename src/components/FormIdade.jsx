import { useState } from "react";

export default function FormIdade() {
  const [idade, setIdade] = useState("");

  function handleChange(event) {
    setIdade(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`O usuário tem ${idade} anos`);
  }

  console.log("state idade: ", idade);

  return (
    <>
      <form>
        <label>Idade</label>
        <input type="text" value={idade} onChange={handleChange} />
        <button onClick={handleSubmit}>Salvar</button>
      </form>
    </>
  );
}
