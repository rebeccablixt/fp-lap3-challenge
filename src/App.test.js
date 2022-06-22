import { render, screen } from '@testing-library/react';
import App from './App';

describe('Searchform', () => {
  // let getResultMock;

  beforeEach(() => {
    // getResultMock = jest.fn();
    render(<App />)
  });

  test('it renders a form', () => {
    let form = screen.getByRole('form');
    expect(form).toBeInTheDocument();;
});

});
