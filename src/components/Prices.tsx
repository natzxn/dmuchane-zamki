import React from "react";
import "../styles/prices.css";
import castleImage from "../assets/castle3.png";
import castleImage2 from "../assets/castle2.png";
import castleImage3 from "../assets/castle4.png";
import { useNavigate } from 'react-router-dom';

const Prices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-center my-8">
        <div className="title">
          <h1 className="mb-10">Cennik</h1>
        </div>
      </section>
      <section className="prices flex justify-center mx-14">
        <div className="price-cards flex gap-16 mb-18 xl:mb-20 3xl:mb-24">
          <div className="card flex flex-col items-center justify-center">
            <figure className="mt-2 mb-6">
              <img className="castle-1" src={castleImage} alt="castle" />
            </figure>
            <h5 className="castle-type text-center mb-7">Nadmuchiwany zamek do<br/> skakania ze zjeżdżalnią</h5>
            <ul className="size-info text-center mb-8">
              <li>Wymiary</li>
              <li>szerokość: 350 cm</li>
              <li>głębokość: 212 cm</li>
              <li>wysokość: 195 cm</li>
              <li>Maksymalne obciążenie - 90kg</li>
              <li className="mt-2">Cena: <span className="price">88 zł / doba</span></li>
            </ul>
            <button className="btn font-semibold" onClick={() => navigate('/reservation')}>REZERWUJ</button>
          </div>
          <div className="card flex flex-col items-center">
            <figure className="mt-2 mb-6">
              <img className="castle-2" src={castleImage2} alt="castle" />
            </figure>
            <h5 className="castle-type text-center mb-7">Nadmuchiwany plac zabaw park wodny</h5>
            <ul className="size-info text-center mb-10">
              <li>Wymiary</li>
              <li>szerokość: 350 cm</li>
              <li>głębokość: 212 cm</li>
              <li>wysokość: 195 cm</li>
              <li>Maksymalne obciążenie - 90kg</li>
              <li className="mt-2">Cena: <span className="price">112 zł / doba</span></li>
            </ul>
          
          </div>
          <div className="card flex flex-col items-center">
            <figure className="mt-2 mb-6">
              <img className="castle-3" src={castleImage3} alt="castle" />
            </figure>
            <h5 className="castle-type text-center mb-7">Wodny dmuchany zamek ze zjeżdżalnią</h5>
            <ul className="size-info text-center mb-10">
              <li>Wymiary</li>
              <li>szerokość: 350 cm</li>
              <li>głębokość: 212 cm</li>
              <li>wysokość: 195 cm</li>
              <li>Maksymalne obciążenie - 90kg</li>
              <li className="mt-2">Cena: <span className="price">112 zł / doba</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
