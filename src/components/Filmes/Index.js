import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import './styles.css';


export default class Filmes extends Component{
    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes = async () =>{
        const api = await axios.create({baseURL: 'https://api-content.ingresso.com/'}).request('v0/templates/highlights/1/partnership/home');
        console.log(api.data[0]);
    }

    render() {
        return <h1>Teste</h1>;
    }
}