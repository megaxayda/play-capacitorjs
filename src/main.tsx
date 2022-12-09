import './index.css';

import { CaptureConsole } from '@sentry/integrations';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

Sentry.init({
  dsn: 'https://238cbb411eab4faaa72f98aee335f13e@o4504298643259392.ingest.sentry.io/4504298644307968',
  integrations: [
    new BrowserTracing(),
    new CaptureConsole({
      levels: ['log', 'info', 'warn', 'error', 'debug', 'assert'],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
