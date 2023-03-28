import React from 'react';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.history.back();
    }
  };

  return (
    <button onClick={handleClick} style={{ cursor: 'pointer' }}>
      뒤로가기버튼..
    </button>
  );
};

export default BackButton;
