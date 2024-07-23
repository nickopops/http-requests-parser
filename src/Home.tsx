import { useState } from 'react';

import { FileUpload } from '@/components/FileUpload';
import { Report } from '@/components/Report';

export const Home = () => {
  const [fileString, setFileString] = useState('');

  if (!fileString) return <FileUpload onSuccess={setFileString} />;

  return (
    <Report fileString={fileString} resetUpload={() => setFileString('')} />
  );
};
