import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { InputContainer, InputWrapper } from './styles';
import useStore from '../../../hooks/useStore';

const Input = () => {
  const [value, setValue] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);

  const store = useStore();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    await store.fetchRepositories(e.target.value);
  };

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <InputContainer>
      <InputWrapper
        type="text"
        id="text"
        placeholder="Введите название репозитория"
        value={value}
        onChange={(e) => handleChange(e)}
        ref={input}
      />
    </InputContainer>
  );
};

export default Input;
