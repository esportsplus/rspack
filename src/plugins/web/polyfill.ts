// @ts-ignore
import { default as NodePolyfill } from '@rspack/plugin-node-polyfill';
import { Configuration } from '~/types';


const node = (config: Configuration) => {
    config.plugins.push( new NodePolyfill() );
};


export default { node };