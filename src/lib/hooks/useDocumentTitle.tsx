import { useEffect, useState } from 'react';

export default function useDocumentTitle(title: string) {
  const [docTitle, setDocTitle] = useState<string>(title);

  useEffect(() => {
    document.title = docTitle;

    return () => {
      document.title = 'Catalyst';
    };
  }, [docTitle]);

  return { docTitle, setDocTitle };
}
