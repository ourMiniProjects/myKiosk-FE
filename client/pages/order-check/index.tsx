import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../src/components/commons/cart/CartContext';
import OrderItem from '../../src/components/units/order/OrderItem';
import Modal from 'react-modal';
import {
  TotalPriceWrapper,
  TotalPrice,
  CheckoutButton,
  OrderItemContainer,
} from './order-check.styles';

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
    await router.push('/order-complete');
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
          <h2>포인트 사용</h2>
          <p>포인트로 결제를 진행하시겠습니까?</p>
          <button onClick={onClickMoveToOrderComplete}>포인트 사용 결제</button>
          <button onClick={closeModal}>취소</button>
        </>
      );
    } else {
      return (
        <>
          <h2>결제 확인</h2>
          <p>결제를 진행하시겠습니까?</p>
          <button onClick={onUsePoints}>포인트 사용</button>
          <button onClick={closeModal}>취소</button>
        </>
      );
    }
  };

  return (
    <>
      <div>CheckOrderPage</div>
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
          Total: ${calculateTotalPrice().toLocaleString()}
        </TotalPrice>
        <CheckoutButton onClick={openModal}>결제....</CheckoutButton>
      </TotalPriceWrapper>
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
            width: '30%',
            textAlign: 'center',
            borderRadius: '20px',
            padding: '20px',
          },
        }}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
}
