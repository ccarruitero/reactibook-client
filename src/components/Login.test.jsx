import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('Login', () => {
  test('render inputs', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText(/email/));
    expect(getByLabelText(/password/));
  });
});
