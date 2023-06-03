import { useState } from "react";

export default function FormLogin() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Seu e-mail e senha são: ${form.email} e ${form.senha}`);
  }

  console.log(form);

  return (
    <>
      <form>
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Senha</label>
        <input
          type="text"
          name="senha"
          value={form.senha}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Salvar</button>
      </form>
    </>
  );
}
