import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';
import { LongArrow } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 1.4rem;
  bottom: 2.4rem;

  ${media.phone`
    bottom:  1.4rem;
  `};
`;

function Icon() {
  return (
    <Wrapper>
      <LongArrow />
    </Wrapper>
  );
}

export default Icon;
