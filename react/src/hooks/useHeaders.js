import { useContext } from 'react';
import { HeadersContext } from '../contexts/HeadersContext';

function useHeaders() {
  const context = useContext(HeadersContext);
  if (context === undefined)
    throw new Error('HeadersContext was used outside the HeadersProvider');

  return context;
}
export { useHeaders };
