import { RoutesClient } from 'compiled/router/Routes';
import { render } from 'react-dom';
import App from './App';

declare global {
  interface Window {
    electron: {
      gRPC: RoutesClient;
    };
  }
}

render(<App />, document.getElementById('root'));
