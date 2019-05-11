import {IsoServer} from '@iso-react/core';
import {getRoot} from '~/root/server';

const server = new IsoServer(getRoot, {debug: true});
server.start();
