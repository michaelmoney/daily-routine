import React from 'react';
import { create } from 'react-test-renderer';

import ConfusionMarks from '../ConfusionMarks';

jest.mock('../../CharactersDecors/ConfusionMarks', () => 'ConfusionMarks');

describe('COMPONENT - Characters Whale GenderFlower', () => {
  it('renders correctly', () => {
    const component = create(<ConfusionMarks />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
