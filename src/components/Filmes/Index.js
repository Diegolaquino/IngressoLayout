import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import './styles.css';


export default class Filmes extends Component{
    state ={
        infoFilmes: []
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes = async () =>{
        const api = await axios.create({baseURL: 'https://api-content.ingresso.com/'}).request('v0/templates/highlights/1/partnership/home');
        
        this.setState({ infoFilmes: api.data });
        console.log(api.data[0]);
    }

    render() {
        return (
            <div className="container">
                <section>
                    <div className="cartaz">
                        Em cartaz
                    </div>
                    {
                        this.state.infoFilmes.map(filme => 
                            (
                                <a href="https://www.ingresso.com/" target="_blank">
                                    <div className="quadroFilme">
                                        <span className="tag">{filme.event.tags[0]}</span>
                                        <h2 className="titulo">{filme.event.title}</h2>
                                    </div>
                                </a>
                            )
                        )
                    }     
                </section>
            </div>
            );
        // return <h1>Contagem Filmes: {this.state.infoFilmes.length} </h1>;
    }
}