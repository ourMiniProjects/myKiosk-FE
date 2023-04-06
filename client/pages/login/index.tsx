import { useRouter } from 'next/router';
import NumberPad from '../../src/components/commons/numberpad/NumberPad';
import { Input } from 'antd';
import {
  Container,
  InputBox,
  SelectCard,
  SelectCardLogin,
} from './login.styles';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const onClickMoveToSignup = async () => {
    await router.push('/signup');
  };

  const [inputValue, setInputValue] = useState('');
  const handleNumberPadClick = (value: string): string => {
    let newInputValue = '';

    if (value === 'X') {
      newInputValue = inputValue.slice(0, -1);
    } else {
      newInputValue = inputValue + value;
    }

    setInputValue(newInputValue);
    return newInputValue;
  };

  return (
    <>
      <Container>
        <SelectCard onClick={onClickMoveToSignup}>
          <img src='/images/select-joinUs.png' />
          간편 멤버십 가입하기
        </SelectCard>
        <SelectCardLogin>
          <img style={{ marginTop: '15px' }} src='/images/login-title.png' />
          <InputBox>
            <Input
              size='large'
              placeholder='전화번호를 입력해주세요.'
              value={inputValue}
            />
          </InputBox>
          <NumberPad onClick={handleNumberPadClick} />
        </SelectCardLogin>
      </Container>
    </>
  );
}
