import React from 'react';
import { Link } from "gatsby"

export function Curiosidades() {
    return (
        <div>
            <h1>Curiosidades</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/prj">Projetos</Link>
                </p>            
        </div>
    );
}