import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ConfirmDelete from './ConfirmDelete';

describe('ConfirmDelete', () => {
  test('not show when not isOpen', () => {
    const { queryByText } = render(<ConfirmDelete />);
    expect(queryByText(/Delete post/i)).toEqual(null);
  });
  test('show when isOpen', () => {
    const { queryByText } = render(<ConfirmDelete isOpen={true}/>);
    expect(queryByText(/Delete post/i)).not.toEqual(null);
  });
  test('call onClose when click cancel', () => {
    const onClose = jest.fn();
    const { getByText } = render(<ConfirmDelete isOpen={true} onClose={onClose} />);
    const cancelBtn = getByText(/cancel/i);
    fireEvent.click(cancelBtn);
    expect(onClose).toHaveBeenCalled();
  });
  test('call onConfirm when click confirm', () => {
    const onConfirm = jest.fn();
    const { getByText } = render(<ConfirmDelete isOpen={true} onConfirm={onConfirm} />);
    const deleteBtn = getByText(/confirm/i);
    fireEvent.click(deleteBtn);
    expect(onConfirm).toHaveBeenCalled();
  });
});
