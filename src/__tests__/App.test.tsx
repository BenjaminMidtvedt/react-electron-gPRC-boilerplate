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

  it('Should greet user EN', (done) => {
    function callback(err: any, res: any) {
      try {
        expect(err).toBeUndefined();
        expect(['Hi!', 'Hello!']).toContain(res.greeting);
        done();
      } catch (error) {
        done(error);
      }
    }

    client.GetGreeting({ language: 'en' }, callback);
  });
});
