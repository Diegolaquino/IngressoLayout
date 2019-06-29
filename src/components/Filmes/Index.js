import React, { Component } from 'react';
import axios from 'axios';
import {  } from 'react';
import './styles.css';


export default class Filmes extends Component{
    state = {
        infoFilmes: []
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes = async () =>{
        const api = await axios.create({baseURL: 'https://api-content.ingresso.com/'}).request('v0/templates/highlights/1/partnership/home');
        
        this.setState({ infoFilmes: api.data });
    }

    render() {
        return (
            <div className="container">
                <section>
                    <div className="cartaz">
                        Em cartaz
                    </div>
                    <hr></hr>
                    {
                        this.state.infoFilmes.map(filme => 
                            (
                                <a href= { filme.event.trailers[0].url } target="_blank">
                                    <div className="quadroFilme" key={filme.event.id} style={{ backgroundImage: `url(${filme.event.images[0].url})` }}>
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
    }
}