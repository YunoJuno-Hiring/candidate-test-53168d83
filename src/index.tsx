import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

root.render(<App />);
registerServiceWorker();
