import React from 'react';
import './styles.css';

const Filtros = () => (
    <div className="container">
        <h2>Filmes</h2>
        <form id="tagForm">
            <div>
                <label>2D</label>
                <input type="checkbox" id="twod" name="2D" />
            </div>
            <div>
                <label>DUB</label>
                <input type="checkbox" id="dub" name="DUB" />
            </div>
            <div>
                <label>3D</label>
                <input type="checkbox" id="threed" name="3D" />
            </div>
            <div>
                <label>D-BOX</label>
                <input type="checkbox" id="dbox" name="D-BOX" />
            </div>
            <div>
                <label>LEG</label>
                <input type="checkbox" id="leg" name="LEG" />
            </div>
            <div>
                <label>XD</label>
                <input type="checkbox" id="xd" name="XD" />
            </div>
            <div>
                <label>VIP</label>
                <input type="checkbox" id="vip" name="VIP" />
            </div>
            <div>
                <label>4D</label>
                <input type="checkbox" id="fourd" name="4D" />
            </div>
            <div>
                <label>Cinepic</label>
                <input type="checkbox" id="cinepic" name="Cinepic" />
            </div>
        </form>
    </div>  
);

export default Filtros;