import path from '~/path';


const entry = (pattern: string | string[], { hash }: { hash?: boolean } = {}) => {
    return {
        filename: `[${hash ? 'contenthash' : 'name'}].js`,
        import: path.resolve(pattern)
    };
};


export { entry };