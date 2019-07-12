import { Star } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Stars = styled.div`
  display: inline-block;
  vertical-align: middle;
  svg {
    color: #ffda5f;
    width: 18px;
    height: 18px;
  }
`;

export default props => (
  <Stars>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </Stars>
);
