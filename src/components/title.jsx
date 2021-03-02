import React from 'react';
import { styled } from '@linaria/react';
import { fontFamilySans } from '../styles/styles';
import { MEDIA_MOBILE } from '../constants';

const StyledTitle = styled.div`
  ${fontFamilySans}
  font-weight: 700;
  font-size: 42px;
  line-height: 1.3;

  &:after {
    content: '';
    display: block;
    width: 30%;
    height: 4px;
    border-radius: 10px;
    background-color: #818fa4;
    margin-top: 0.4em;
  }

  ${MEDIA_MOBILE} {
    font-size: 36px;
  }
`;

function Title({ className, children }) {
  return <StyledTitle className={className}>{children}</StyledTitle>;
}

export default Title;
