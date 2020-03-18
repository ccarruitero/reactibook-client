import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewPost from './NewPost';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn().mockReturnValue({ token: 'secrettoken123'})
}));

describe('NewPost', () => {
  test('render correctly', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <NewPost />
      </MemoryRouter>
    );
    expect(getByPlaceholderText(/Whats happening?/));
  });
});
