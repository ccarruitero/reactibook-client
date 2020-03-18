import React, { Fragment, useState } from 'react';
import {
  TextareaAutosize,
  Select,
  MenuItem,
  Button,
  Box,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { isNotEmpty } from '../utils/validation';

const StyledBox = styled(Box) ({
  width: '50%',
  margin: 'auto',
});

const StyledTextarea = styled(TextareaAutosize) ({
  width: '100%',
});

const EditablePost = ({ post, btnTxt, placeholder, onSubmit }) => {
  const initialState = {
    text: post?.text || '',
    sharedWith: post?.sharedWith || 'public',
  };
  const [values, setValues] = useState(initialState);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleSubmit = async (event) => {
    await onSubmit(values);
    setValues(initialState);
  }

  return (
    <StyledBox>
      <StyledTextarea
        rowsMin={7}
        placeholder={placeholder}
        onChange={handleChange('text')}
        value={values.text}
      />
      <Select
        value={values.sharedWith}
        onChange={handleChange('sharedWith')}
      >
        <MenuItem value={'public'}>Public</MenuItem>
        <MenuItem value={'friends'}>Friends</MenuItem>
      </Select>
      <Button
        variant='contained'
        color='primary'
        disabled={isNotEmpty(values.text) ? false : true}
        onClick={handleSubmit}
      >
        { btnTxt}
      </Button>
    </StyledBox>
  );
};

export default EditablePost;
