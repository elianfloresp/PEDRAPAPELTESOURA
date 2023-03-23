import { useState } from "react";
import "./styles.css";

export default function App() {
  const [aposta, setAposta] = useState("");
  const [pc, setPc] = useState("");
  const [mensa, setMensa] = useState("");
  const [vitorias, setVitorias] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  function definirAposta(foto) {
    setAposta(foto);
  }
  function desafiarPC() {
    if (aposta === "") {
      alert("Você deve primeiro escolher uma foto");
      return;
    }
    if (pc !== "") {
      alert("Clique em Novo Jogo para apostar novamente");
      return;
    }
    const num = Math.ceil(Math.random() * 3);
    let imagemPc;
    if (num === 1) {
      imagemPc = "pedra.png";
    } else if (num === 2) {
      imagemPc = "papel.png";
    } else {
      imagemPc = "tesoura.png";
    }
    setPc(imagemPc);
    if (aposta === imagemPc) {
      setMensa("Ah... Deu Empate");
      setEmpates(empates + 1);
    } else {
      if (
        (aposta === "pedra.png" && imagemPc === "tesoura.png") ||
        (aposta === "tesoura.png" && imagemPc === "papel.png") ||
        (aposta === "papel.png" && imagemPc === "pedra.png")
      ) {
        setMensa("Huhuu... Você Venceu");
        setVitorias(vitorias + 1);
      } else {
        setMensa("Xii... Você perdeu");
        setDerrotas(derrotas + 1);
      }
    }
  }
  function novoJogo() {
    setAposta("");
    setPc("");
    setMensa("");
  }
  return (
    <div className="container">
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <h3 className="fst-italic mx-3">Jogo: Pedra x Papel x Tesoura</h3>
      </nav>
      <h3 className="mt-3">
        Clique sobre a imagem:
        <img
          src="pedra.png"
          alt="Pedra"
          className="foto-peq ms-3"
          onClick={() => definirAposta("pedra.png")}
        />
        <img
          src="papel.png"
          alt="Papel"
          className="foto-peq ms-3"
          onClick={() => definirAposta("papel.png")}
        />
        <img
          src="tesoura.png"
          alt="Tesoura"
          className="foto-peq ms-3"
          onClick={() => definirAposta("tesoura.png")}
        />
      </h3>
      <div className="row altura-jogo">
        <div className="col-sm-6">
          <h3>Sua Aposta: </h3>
          {aposta && (
            <img src={aposta} alt="Aposta" className="foto-grande mt-3 ms-4" />
          )}
        </div>
        <div className="col-sm-6">
          <button
            type="button"
            class="btn btn-danger btn-lg"
            onClick={desafiarPC}
          >
            Desafiar PC
          </button>
          <br />
          {pc && (
            <img
              src={pc}
              alt="Aposta do PC"
              className="foto-grande mt-3 ms-4"
            />
          )}
        </div>
      </div>
      <h3 className="altura-mensa">{mensa}</h3>
      <h4 className="text-primary">Nº de Vitórias: {vitorias}</h4>
      <h4 className="text-secondary">Nº de Empates: {empates}</h4>
      <h4 className="text-danger">Nº de Derrotas: {derrotas}</h4>
      <button
        type="button"
        class="btn btn-success btn-lg ms-5 mt-4"
        onClick={novoJogo}
      >
        Novo Jogo
      </button>
    </div>
  );
}
