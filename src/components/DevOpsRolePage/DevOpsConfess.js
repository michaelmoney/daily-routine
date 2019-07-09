import React from 'react';
import sample from 'lodash.sample';

import { CONFESS } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

import QUOTES from '../../quotes/backEndQuotes';

// TODO Replace with auto-generated message
const QUOTE = sample(QUOTES);

function DevOpsConfess() {
  return (
    <>
      <Whale pose={CONFESS} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default DevOpsConfess;
