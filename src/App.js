import './App.css';
import React from "react";
import Card from "./components/card/card";
import { ReactComponent as Sedan } from './images/icon-sedans.svg';
import { ReactComponent as Suv } from './images/icon-suvs.svg';
import { ReactComponent as Luxury } from './images/icon-luxury.svg';
import Button from "./components/button/button";


function App() {
  return (
    <main className="container">
      <Card
          icon={<Sedan/>}
          title='Sedans'
          content='Choose a sedan its affordability and excellentf fuel economy. Ideal for cruising in the city or your next road trip.'
          color='bright-orange'
          border='border-top'
      >
          <Button color='bright-orange'>
              Learn More
          </Button>
      </Card>
      <Card
          icon={<Suv/>}
          title='Suvs'
          content='Take an SUV for its spacious interior, power, and versatility Perfect for your next family vacation and off-road adventures.'
          color='dark-cyan'
      >
          <Button color='dark-cyan'>
              Learn More
          </Button>
      </Card>
      <Card
          icon={<Luxury/>}
          title='Luxury'
          content='Cruise in the best ar brands without the bloated prices.Enjoy the enhanced comfort of a luxury renta and arrive in style.'
          color='very-dark-cyan'
          border='border-bottom'
      >
          <Button color='very-dark-cyan'>
              Learn More
          </Button>
      </Card>
    </main>
  );
}

export default App;
