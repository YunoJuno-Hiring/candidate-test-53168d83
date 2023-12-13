import React from 'react';
import { createRoot } from 'react-dom/client';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import { App } from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    root.render(<App />);
    root.unmount();
  });

  it('Matches DOM snapshot', () => {
    const renderer = ShallowRenderer.createRenderer();
    const domTree = renderer.render(<App />);
    expect(domTree).toMatchSnapshot();
  });
});
