import { Configuration } from '~/types';


export default (config: Configuration, options: NonNullable< Configuration['builtins']['html'] >[0] = {}) => {
    options.meta ??= {};
    options.meta.content ??= 'text/html';
    options.meta.viewport ??= 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimal-ui';

    options.minify = options?.minify || true;

    options.sri = options?.sri || 'sha256';

    config.builtins.html = [options];
};