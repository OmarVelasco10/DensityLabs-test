import { Provider } from 'react-redux';
import { store } from '../store';

interface ReduxProviderProps {
    children: React.ReactNode;
    reduxStore?: any;
}

export const ReduxProvider = ({ children, reduxStore = store }: ReduxProviderProps) => (
  <Provider store={reduxStore}>{children}</Provider>
)