import React from 'react';
import { shallow } from 'enzyme';
import {render} from 'react-testing-library'
import ListingCreator from '../../../client/components/demo_one/ListingCreator';

describe('ListingCreator', () => {
  test('should render a <div />', () => {
    const wrapper = shallow(<ListingCreator />);
    expect(wrapper.find('div')).toHaveLength(0);
  });

  test('counter increments the count', () => {
    const
  })

});
