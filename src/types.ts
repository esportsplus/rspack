import { Configuration as RspackConfiguration } from "@rspack/cli";
import { EntryObject } from "@rspack/core";
import { default as p } from './plugins';


type Configuration = {
    module: {
        rules: NonNullable< NonNullable<RspackConfiguration['module']>['rules'] >
    };
    builtins: NonNullable< RspackConfiguration['builtins'] >;
    optimization: NonNullable< RspackConfiguration['optimization'] >;
    output: NonNullable< RspackConfiguration['output'] >;
    plugins: NonNullable< RspackConfiguration['plugins'] >;
    resolve: NonNullable< RspackConfiguration['resolve'] >;
} & RspackConfiguration;

type NestedConfiguration = {
    entry: NestedEntry | NonNullable< Configuration['entry'] >,
    use?: (plugins: ReturnType<typeof p>) => void;
} & Omit<Configuration, 'entry'>;

interface NestedEntry {
    [key: string]: NestedEntry | NonNullable< Configuration['entry'] >
};

type StrictConfiguration = Omit<NestedConfiguration, 'entry'> & { entry: Record<string, NestedEntry> };


export { Configuration, EntryObject, NestedConfiguration, NestedEntry, StrictConfiguration };