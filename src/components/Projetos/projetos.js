import React from "react"
import { Link } from "gatsby"

export function Projetos() {
  return (
    <div>
       <div>
            <h1>Projetos</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/crd">Curiosidades</Link>
                </p>            
        </div>
    </div>
  )
}