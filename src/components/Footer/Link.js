import styled from 'styled-components';

import { colorBlack, fontMedium } from '../../styles/designTokens';

const Link = styled.a.attrs({
  target: '_blank'
})`
  height: 3.6rem;
  min-width: 6rem;
  font-size: ${fontMedium};
  color: ${colorBlack};
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  svg {
    display: inline-block;
    margin: 0 0.4rem;
  }
`;

export default Link;
