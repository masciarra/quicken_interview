import React from 'react';

const FlexBox = props => (
  <div style={{ display: 'flex' }} {...props}>
    {props.children}
  </div>
);

export default FlexBox;
