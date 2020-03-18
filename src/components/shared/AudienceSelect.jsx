import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const AudienceSelect = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
    >
      <MenuItem value={'public'}>Public</MenuItem>
      <MenuItem value={'friends'}>Friends</MenuItem>
    </Select>
  );
};

export default AudienceSelect;
