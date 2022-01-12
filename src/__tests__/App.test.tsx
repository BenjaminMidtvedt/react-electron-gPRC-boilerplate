/* eslint global-require: off, no-console: off, promise/always-return: off */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../renderer/App';
import * as Routes from '../compiled/routes';
import server from '../main/start-server';

const process = server.start();

describe('App', () => {
  afterAll(() => {
    process.kill(2);
    process.unref();
  });

  beforeAll(() => {
    const client = require('../main/client');
    window.electron = {
      gRPC: client,
    };
  });

  it('should render', async () => {
    render(<App />);
    expect(
      await screen.findByText('Python says Hej!', {}, { timeout: 10000 })
    ).toBeInTheDocument();
  }, 10000);

  it('Should compile proto', () => {
    expect(Routes).toBeDefined();
  });
});
