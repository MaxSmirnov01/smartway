import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { InputContainer, InputWrapper } from './styles';
import useStore from '../../../hooks/useStore';
import useThrottle from '../../../hooks/useThrottle';
import CopyButton from '../CopyButton/CopyButton';

const Input = () => {
  const [value, setValue] = useState<string>('');
  const input = useRef<HTMLInputElement | null>(null);

  const store = useStore();
  const throttle = useThrottle();

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    throttle(() => {
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      store.fetchRepositories(e.target.value, abortController.signal);
    });
  };

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }

    return () => abortControllerRef.current?.abort();
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
      <CopyButton value={value} />
    </InputContainer>
  );
};

export default Input;
