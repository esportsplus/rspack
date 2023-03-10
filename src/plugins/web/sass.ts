import { Configuration } from '~/types';
import autoprefixer from 'autoprefixer';
import sass from 'sass';


export default (config: Configuration) => {
    config.module.rules.push(
        {
            test: /\.(c|sc|sa)ss$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                autoprefixer()
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        // Use `dart-sass`
                        implementation: sass,
                    },
                },
            ],
        }
    );
};