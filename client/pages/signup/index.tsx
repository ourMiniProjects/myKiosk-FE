import NumberPad from '../../src/components/commons/numberpad/NumberPad';
import { useState } from 'react';
import { Container, ImageBox, SelectCardSignup } from './signUp.styles';

export default function SignUpPage() {
  const [inputValue, setInputValue] = useState('');

  const handleNumberPadClick = (value: string | KeyboardEvent): string => {
    if (typeof value === 'string') {
      setInputValue((prev) => prev + value);
    }
    return '';
  };

  return (
    <>
      <Container>
        <SelectCardSignup>
          <img style={{ marginTop: '15px' }} src='/images/joinUs-title.png' />
          <NumberPad
            onClick={handleNumberPadClick}
            inputValue={''}
            mode={'join'}
          />
        </SelectCardSignup>
        <ImageBox>
          <img src='/images/welcome.png' />
        </ImageBox>
      </Container>
    </>
  );
}
