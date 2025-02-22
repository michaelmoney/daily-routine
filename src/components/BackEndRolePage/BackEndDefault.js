import React from 'react';

import { DEFAULT } from '../../constants/roleActions';
import { THOUGHT } from '../../constants/speechBubbleVariant';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function BackEndDefault() {
  return (
    <>
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
      <Robot pose={DEFAULT} />
    </>
  );
}

export default BackEndDefault;
