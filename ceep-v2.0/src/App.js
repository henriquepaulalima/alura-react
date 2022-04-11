import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {

  constructor(){
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias.categorias} 
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria}
          />
          <ListaDeNotas 
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
