interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const onClickBackButton = () => {
    if (onClick) {
      onClick();
    } else {
      window.history.back();
    }
  };

  return (
    <button onClick={onClickBackButton} style={{ cursor: 'pointer' }}>
      뒤로가기버튼..
    </button>
  );
};

export default BackButton;
