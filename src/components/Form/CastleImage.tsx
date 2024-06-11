import React from 'react';
import '../../styles/reservation.css'

import FirstCastle from '../../assets/castle3.png';
import SecondCastle from '../../assets/castle2.png';
import ThirdCastle from '../../assets/castle4.png';

type CastleOption = 'first-option' | 'second-option' | 'third-option';

const CastleImage = ({ selectedCastle }: { selectedCastle: CastleOption | null }) => {
    
  const renderCastleImage = () => {
    switch (selectedCastle) {
      case "first-option":
        return <img src={FirstCastle} alt="First Castle" />;
      case "second-option":
        return <img src={SecondCastle} alt="Second Castle" />;
      case "third-option":
        return <img src={ThirdCastle} alt="Third Castle" />;
      default:
        return null;
    }
  };

  return <div className="chosen-castle">{renderCastleImage()}</div>;
};

export default CastleImage;
