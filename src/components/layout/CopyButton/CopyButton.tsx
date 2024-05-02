import copy from 'clipboard-copy';
import { Button } from '../RepositoryCard/styles';
import { useState } from 'react';

const СopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    copy(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return <Button onClick={handleClick}>{copied ? 'Copied' : 'Copy'}</Button>;
};

export default СopyButton;
