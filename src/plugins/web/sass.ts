import { Configuration } from '~/types';
import autoprefixer from 'autoprefixer';
import sass from 'sass';
import path from '~/path';


// DO NOT ADD EXTENSION TO 'filename'
// - All files will receive the extension ( including bundled js files )
// - `mini-css-extract-plugin` plugin appends css extension once extracted
// - JS files created during bundle are left extensionless
// - Makes it easy to cleanup empty js files after build
const entry = (pattern: string | string[], { hash }: { hash?: boolean } = {}) => {
    return {
        filename: `[${hash ? 'contenthash' : 'name'}]`,
        import: path.resolve(pattern)
    };
};


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
export { entry };