import { useState } from "react";
import confetti from "canvas-confetti";

export default function CalculadoraIdade() {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [fezAniversario, setFezAniversario] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = parseInt(ano);

    if (!nome || isNaN(anoNascimento) || anoNascimento > anoAtual) {
      setResultado("Preencha os dados corretamente ✨");
      return;
    }

    const idade =
      fezAniversario === "sim"
        ? anoAtual - anoNascimento
        : anoAtual - anoNascimento - 1;

    setResultado(`${nome}, você tem ${idade} anos 🎉`);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="card">
      <h1>Calculadora de Idade</h1>

      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Ano de nascimento"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />

      <select
        value={fezAniversario}
        onChange={(e) => setFezAniversario(e.target.value)}
      >
        <option value="">Já fez aniversário este ano?</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <button onClick={calcularIdade}>Calcular idade</button>

      {resultado && <div className="resultado">{resultado}</div>}
    </div>
  );
}
