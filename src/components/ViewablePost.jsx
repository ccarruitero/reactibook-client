import React from 'react';
import {
  Paper,
  Button,
  Typography,
  Box,
} from '@material-ui/core';
import StyledBox from  './shared/StyledBox';
import {
  Edit,
  Delete,
} from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper) ({
  margin: '5px 0',
  padding: '0.5rem',
});

const Heading = styled(Typography) ({
  position: 'left',
  'font-size': '14px',
});

const ViewablePost = ({ post, onEdit, onDelete }) => {
  return (
    <StyledBox>
      <StyledPaper elevation={3}>
        <Heading color="textSecondary" gutterBottom>
          {post.sharedWith}
        </Heading>
        {post.text}
        <Box>
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
        </Box>
      </StyledPaper>
    </StyledBox>
  );
};

export default ViewablePost;
