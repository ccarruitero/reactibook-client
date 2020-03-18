import React, { Fragment, useState } from 'react';
import {
  TextareaAutosize,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { isNotEmpty } from '../utils/validation';
import StyledBox from './shared/StyledBox';
import AudienceSelect from './shared/AudienceSelect';

const StyledTextarea = styled(TextareaAutosize) ({
  width: '100%',
});

const EditablePost = ({ post, btnTxt, placeholder, onSubmit, onCancel }) => {
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
      <AudienceSelect
        value={values.sharedWith}
        onChange={handleChange('sharedWith')}
      />
      <Button
        variant='contained'
        color='primary'
        disabled={isNotEmpty(values.text) ? false : true}
        onClick={handleSubmit}
      >
        { btnTxt}
      </Button>
      { onCancel &&
        <Button
          variant='contained'
          color='secondary'
          onClick={onCancel}
        >
          Cancel
        </Button>
      }
    </StyledBox>
  );
};

export default EditablePost;
