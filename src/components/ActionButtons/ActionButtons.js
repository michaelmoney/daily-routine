// Brag and Confess buttons for specified role

import React from 'react';

import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../constants/roles';
import { role } from '../../types';

import { getRandomQuotesIDs } from '../../utils/quotesService';
import Navigation from '../Navigation';
import Content from '../Content';
import Wrapper from './Wrapper';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';

function ActionButtons({ role }) {
  const { bragQuoteID, confessQuoteID } = getRandomQuotesIDs(role);

  return (
    <Wrapper>
      <Content>
        <Navigation>
          <BragButton quoteID={bragQuoteID} role={role} data-testid={`${role}-${BRAG_ROLE_ACTION}-button`} />
          <ConfessButton quoteID={confessQuoteID} role={role} data-testid={`${role}-${CONFESS_ROLE_ACTION}-button`} />
        </Navigation>
      </Content>
    </Wrapper>
  );
}

ActionButtons.propTypes = {
  role: role.isRequired
};

export default ActionButtons;
