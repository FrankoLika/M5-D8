import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className='cont'>
      <div>
        <h1 >Oops!</h1>
        <h2 >Pagina non trovata</h2>
        <p >
          Sembra che tu abbia cercato una pagina che non esiste.
        </p>
        <p >
          Torna alla <Link to={"/"}>Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

