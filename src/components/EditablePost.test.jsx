import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditablePost from './EditablePost';

describe('EditablePost', () => {
  test('render correctly', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, container } = render(
      <MemoryRouter>
        <EditablePost
          btnTxt='my-submit-button'
          placeholder='my-textarea'
          onSubmit={onSubmit}
        />
      </MemoryRouter>
    );
    const btn = container.querySelector('button');
    expect(btn.textContent).toBe('my-submit-button');
    expect(btn).toHaveAttribute('disabled');

    const textarea = getByPlaceholderText(/my-textarea/);
    fireEvent.change(textarea, { target: { value: 'new content'}});
    expect(btn).not.toHaveAttribute('disabled');

    fireEvent.click(btn);
    expect(onSubmit).toHaveBeenCalled();
  });
});
