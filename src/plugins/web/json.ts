import { Configuration } from '~/types';


export default (config: Configuration) => {
    config.module.rules.push({
        generator: {
            filename: 'json/[contenthash][ext]'
        },
        test: /\.json$/,
        type: 'asset/resource'
    });
};