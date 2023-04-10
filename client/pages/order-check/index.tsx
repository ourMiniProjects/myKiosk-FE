<<<<<<< HEAD
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../src/components/commons/cart/CartContext';
import OrderItem from '../../src/components/units/order/OrderItem';
import Modal from 'react-modal';

=======
import { useRouter } from "next/router";
import { useCart } from "../../src/components/commons/cart/CartContext";
import OrderItem from "../../src/components/units/order/OrderItem";
>>>>>>> 6f614de58a9806bbd096c3eb81e21a2f30657fb0
import {
  TotalPriceWrapper,
  TotalPrice,
  CheckoutButton,
  OrderItemContainer,
<<<<<<< HEAD
  ModalContent,
  TextContainer,
  ButtonContainer,
  CancelButton,
} from './order-check.styles';
=======
  CardIcon,
} from "./order-check.styles";
>>>>>>> 6f614de58a9806bbd096c3eb81e21a2f30657fb0

Modal.setAppElement('#__next');

export default function OrderCheckPage() {
  const router = useRouter();
  const { items } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [usePoints, setUsePoints] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setUsePoints(false);
  };

  const onClickMoveToOrderComplete = async () => {
    await router.push("/order-complete");
  };

  const onUsePoints = () => {
    setUsePoints(true);
  };

  const calculateTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  const renderModalContent = () => {
    if (usePoints) {
      return (
        <>
          <ModalContent>
            <TextContainer>
              <h2>포인트 사용</h2>
              <p>
                {`{주문번호}`} 고객님의 잔여 포인트는 {`{000}`}원 입니다.
              </p>
              <p>{`{00}`} 원 사용하기</p>
              <p>남은포인트: {`{000}`}</p>
            </TextContainer>
            <ButtonContainer>
              <button onClick={onClickMoveToOrderComplete}>
                포인트 사용 결제
              </button>
            </ButtonContainer>
            <CancelButton onClick={closeModal}>&times;</CancelButton>
          </ModalContent>
        </>
      );
    } else {
      return (
        <>
          <ModalContent>
            <TextContainer>
              <h2>결제 확인</h2>
              <p>
                {`{주문번호}`} 고객님의 잔여 포인트는 {`{000}`}원 입니다.
              </p>
            </TextContainer>
            <ButtonContainer>
              <button onClick={onUsePoints}>포인트 사용하기</button>
              <CheckoutButton onClick={onClickMoveToOrderComplete}>
                {' '}
                결제하기
              </CheckoutButton>
            </ButtonContainer>

            <CancelButton onClick={closeModal}>&times;</CancelButton>
          </ModalContent>
        </>
      );
    }
  };

  return (
    <>
      <OrderItemContainer>
        {items.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            menuName={item.menuName}
            amount={item.amount}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </OrderItemContainer>
      <TotalPriceWrapper>
        <TotalPrice>
          Total : ₩ {calculateTotalPrice().toLocaleString()}
        </TotalPrice>

        <CheckoutButton onClick={openModal}>결제하기</CheckoutButton>

        {/* <CheckoutButton onClick={onClickMoveToOrderComplete}>
          <CardIcon />
          결제하기
        </CheckoutButton> */}
      </TotalPriceWrapper>
      {/* 모달/스타일 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='결제 확인 모달'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            borderRadius: '20px',
            padding: '20px',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center',
          },
        }}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
}
