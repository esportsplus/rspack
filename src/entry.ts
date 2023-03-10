import { EntryObject, NestedConfiguration } from "~/types";
import path from './path';


function recursive(data: EntryObject, prefix: string = '') {
    var path = prefix ? `${prefix}/` : '',
        output: any = {};

    for (var key in data) {
        let value: any = data[key];

        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            if (value?.filename === undefined) {
                Object.assign(output, recursive(value, `${path}${key}`));
                continue;
            }
            else if (value.filename.indexOf('[name]') === -1) {
                value.filename = `${path}${value.filename}`;
            }
        }

        output[`${path}${key}`] = value;
    }

    return output;
}


const entry = (pattern: string | string[]) => {
    return path.resolve(pattern);
};

const flatten = (data: NestedConfiguration['entry']) => {
    if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
        return recursive(data as EntryObject);
    }

    return data;
}


export default entry;
export { flatten };