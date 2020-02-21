import React, { Component } from 'react'

export default class Buscador extends Component {

    busquedaRef = React.createRef();

    //funcion obtenerdatos() sameshit
    obtenerDatos = (e) => {
        e.preventDefault();
        //toma valores del input
        const termino = this.busquedaRef.current.value;
        //envia valores al componente principal
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu imagen">
                        </input>
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Buscar">
                        </input>
                    </div>
                </div>
            </form>
        );
    }
}

