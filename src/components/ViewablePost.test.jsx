import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ViewablePost from './ViewablePost';

const post = {
  text: 'an awesome text',
  sharedWith: 'public',
};

describe('ViewablePost', () => {
  test('render post attributes', () => {
    const { getByText } = render(<ViewablePost post={post} />);
    expect(getByText(post.text)); 
    expect(getByText(post.sharedWith)); 
  });
  test('call onEdit when click edit', () => {
    const onEdit = jest.fn();
    const { getByText } = render(<ViewablePost post={post} onEdit={onEdit} />);
    const btn = getByText(/edit/i);
    fireEvent.click(btn);
    expect(onEdit).toHaveBeenCalled();
  });
  test('call onDelete when confirm', () => {
    const onDelete = jest.fn();
    const { getByText } = render(
      <ViewablePost post={post} onDelete={onDelete} />
    );
    const btn = getByText(/delete/i);
    fireEvent.click(btn);
    expect(getByText(/Delete post/i));
    const confirm = getByText(/confirm/i);
    fireEvent.click(confirm);
    expect(onDelete).toHaveBeenCalled();
  });
});
