import { Input } from 'antd';
import NumberPad from '../../src/components/commons/numberpad/NumberPad';
import { useState } from 'react';
import {
  Container,
  ImageBox,
  InputBox,
  SelectCardSignup,
} from './signUp.styles';

export default function SignUpPage() {
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
        <SelectCardSignup>
          <img style={{ marginTop: '15px' }} src='/images/joinUs-title.png' />
          <InputBox>
            <Input
              size='large'
              placeholder='전화번호를 입력해주세요.'
              value={inputValue}
            />
          </InputBox>
          <NumberPad onClick={handleNumberPadClick} />
        </SelectCardSignup>
        <ImageBox>
          <img src='/images/welcome.png' />
        </ImageBox>
      </Container>
    </>
  );
}
