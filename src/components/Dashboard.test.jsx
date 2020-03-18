import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './Dashboard';


jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (cb) => cb({
    auth: { token: 'abcde1234' },
    posts: [],
  }),
}));

describe('Dashboard', () => {
  test('render new dashboard', () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(getByPlaceholderText(/Whats happening?/));
    expect(getByText(/Publish/));
    expect(getByText(/Posts/));
  });
});
