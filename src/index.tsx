import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

root.render(<App />);
registerServiceWorker();
