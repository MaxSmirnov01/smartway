import { throttle } from 'lodash';
import { useCallback } from 'react';

// здесь вероятно больше подходит debounce

const useThrottle = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    throttle(async (func) => {
      await func();
    }, 1000),
    [],
  );
};

export default useThrottle;
