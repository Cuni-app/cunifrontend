import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-white mt-5 p-4 text-center myfooter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Cuni. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;