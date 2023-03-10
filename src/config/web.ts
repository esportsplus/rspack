import { StrictConfiguration } from '~/types';
import config from './index';


export default (base: StrictConfiguration, options: Parameters<typeof config>[1] = {}) => {
    base.output ??= {};
    base.output.path ??= 'public';

    base.target = 'web';

    let previous = base.use;

    base.use = (plugins) => {
        if (previous) {
            previous(plugins);
        }

        plugins.web.fonts();
        plugins.web.images();
        plugins.web.json();
        plugins.web.sass();
        plugins.web.server();
        plugins.web.svg({
            inline: 'storage/svg'
        });
        plugins.web.txt();
    };

    return config(base, options);
};