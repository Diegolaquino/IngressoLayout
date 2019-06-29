import React from 'react';
import './styles.css';

let checkboxes = {
    twod: 0,
    dub: 0,
    threed: 0,
    dbox: 0,
    leg: 0,
    xd: 0,
    vip: 0,
    fourd: 0,
    cinepic: 0
}
const Filtros = () => (
    <div className="containerFiltro">
        <h2>Filmes</h2>
        <form id="tagForm">
            <div>
                <label>2D</label>
                <input type="checkbox" id="twod" name="2D" onChange={ chkClick }/>
            </div>
            <div>
                <label>DUB</label>
                <input type="checkbox" id="dub" name="DUB" onChange={ chkClick }/>
            </div>
            <div>
                <label>3D</label>
                <input type="checkbox" id="threed" name="3D" onChange={ chkClick }/>
            </div>
            <div>
                <label>D-BOX</label>
                <input type="checkbox" id="dbox" name="D-BOX" onChange={ chkClick }/>
            </div>
            <div>
                <label>LEG</label>
                <input type="checkbox" id="leg" name="LEG" onChange={ chkClick }/>
            </div>
            <div>
                <label>XD</label>
                <input type="checkbox" id="xd" name="XD" onChange={ chkClick }/>
            </div>
            <div>
                <label>VIP</label>
                <input type="checkbox" id="vip" name="VIP" onChange={ chkClick }/>
            </div>
            <div>
                <label>4D</label>
                <input type="checkbox" id="fourd" name="4D" onChange={ chkClick }/>
            </div>
            <div>
                <label>Cinepic</label>
                <input type="checkbox" id="cinepic" name="Cinepic" onChange={ chkClick }/>
            </div>
        </form>
    </div>  
);

function chkClick(event){
    if(event.currentTarget.checked === true)
        marcacaoEvento(event.currentTarget.id, true);
    else
        marcacaoEvento(event.currentTarget.id, false);
}

function marcacaoEvento(chkNome, marcar){

    switch(chkNome){
        case 'twod':
            marcar ? checkboxes.twod = 1: checkboxes.twod = 0; 
            break;
        case 'dub':
            marcar ? checkboxes.dub = 1: checkboxes.dub = 0; 
            break;
        case 'threed':
            marcar ? checkboxes.threed = 1: checkboxes.threed = 0; 
            break;
        case 'dbox':
            marcar ? checkboxes.dbox = 1: checkboxes.dbox = 0;
                break; 
        case 'leg':
            marcar ? checkboxes.leg = 1: checkboxes.leg = 0;
                break; 
        case 'xd': 
            marcar ? checkboxes.xd = 1: checkboxes.xd = 0;
            break;
        case 'vip':
            marcar ? checkboxes.vip = 1: checkboxes.vip = 0;
                break; 
        case 'fourd':
            marcar ? checkboxes.fourd = 1: checkboxes.fourd = 0;  
            break;
        case 'cinepic': 
            marcar ? checkboxes.cinepic = 1: checkboxes.cinepic = 0; 
            break;
        default:
            console.log("checkbox desconhecido.");
            break;
    }
}

export default Filtros;