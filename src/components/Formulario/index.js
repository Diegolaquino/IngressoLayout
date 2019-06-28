import React from 'react';
import './styles.css';

const Header = () => (
    <header id="main-form">Main Form</header>
    <form>
        <label>Nome</label>
        <input type="text" name="nome">

        <label>CPF</label>
        <input type="text" name="CPF">

        <p>Sexo:</p>
        <input type="radio" id="mulher" name="sexo" value="2" checked>
        <label for="mulher">Mulher</label>
        <input type="radio" id="homem" name="sexo" value="1">
        <label for="homem">Homem</label>

        <label>Email</label>
        <input type="email">

        <label>Data</label>
        <input type="date">

        <p>Estado Civil</p>
        <input type="radio" id="solteiro" name="EstadoCivil" value="1" checked>
        <label for="solteiro">Solteiro</label>
        <input type="radio" id="casado" name="EstadoCivil" value="2">
        <label for="casado">Casado</label>
        <input type="radio" id="viuvo" name="EstadoCivil" value="3">
        <label for="viuvo">Viuvo</label>

        <p>Possui filhos?:</p>
        <input type="radio" id="simfilho" name="filho" value="1" checked>
        <label for="sim">Sim</label>

        <input type="radio" id="naofilho" name="filho" value="2">
        <label for="nao">Sim</label>
    </form>
);

export default Header;