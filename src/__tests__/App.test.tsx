import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/App';
import * as Routes from '../compiled/routes';

import client from '../main/client';

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });

  it('Should compile proto', () => {
    expect(Routes).toBeDefined();
  });
});
