/* istanbul ignore file */
import React from 'react';
import {hydrate} from 'react-dom';
import {DataClient} from '@iso-react/data';

import Root from '~/root/client';

const client = new DataClient(window.__INITIAL_STATE__);

hydrate(<Root client={client} />, document.getElementById('app'));
