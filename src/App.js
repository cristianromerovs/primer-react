import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';


class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    //Leer el state actual
    let pagina = this.state.pagina;
    //Leer si la pagina es 1
    if (pagina === 1) return null;
    //Restar uno a la pagina
    pagina -= 1;
    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

  }

  paginaSiguiente = () => {
    //Leer el state actual
    let pagina = this.state.pagina;
    //Sumar uno a la pagina
    pagina += 1;
    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=15326021-9b76c47f9a295fb374e02bde7&q=${termino}&per_page=30&page=${pagina}`;

    //console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json () )
      .then(resultado => this.setState({imagenes : resultado.hits}) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }
  render(){
    return (
      <div className="container app">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda}/>
        </div>
        <Resultado 
          imagenes={this.state.imagenes}
          paginaAnterior = {this.paginaAnterior}
          paginaSiguiente = {this.paginaSiguiente}
        />
      </div>
    );
  }
}

export default App;
