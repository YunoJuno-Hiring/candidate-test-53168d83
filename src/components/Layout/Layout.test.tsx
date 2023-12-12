import React from 'react';
import { Layout } from '@components';
import renderer from 'react-test-renderer';

describe('Layout component', () => {
  it('renders correctly with children', () => {
    const component = renderer
      .create(
        <Layout>
          <div>child div</div>
        </Layout>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
