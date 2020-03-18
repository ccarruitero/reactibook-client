import React from 'react';
import {
  Paper,
  Button,
} from '@material-ui/core';
import StyledBox from  './shared/StyledBox';
import {
  Edit,
  Delete,
} from '@material-ui/icons';

const ViewablePost = ({ post, onEdit, onDelete }) => {
  return (
    <StyledBox>
      {post.sharedWith}
      <Paper>
        {post.text}
      </Paper>
      <Button
        variant='contained'
        color='primary'
        startIcon={<Edit />}
        onClick={onEdit}
      >
        Edit
      </Button>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<Delete />}
        onClick={onDelete}
      >
        Delete
      </Button>
    </StyledBox>
  );
};

export default ViewablePost;
