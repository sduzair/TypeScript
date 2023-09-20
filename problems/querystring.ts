// convert ?key1=value1&key2=value2
// to
// {
//  key1: "value1",
//  key2: "value2"
// }

// convert ?key1=value1&key2=value2&baz
// to
// {
//  key1: "value1",
//  key2: "value2",
//  baz: "true"
// }

// convert ?key1=value1&key2=value2&key1=value3
// to
// {
//  key1: ["value1", "value3"],
//  key2: "value2",
// }

type OutputType = Record<string, string | string[]>

function convertQueryString(str: string): OutputType {
    //remove ? mark
    str = removePrefixedQuestionMark(str);
    //return if no key-value pairs
    if (!hasKeyValPairs(str)) return {};
    //split pairs
    const pairs = str.split('&');
    //convert pairs to object
    let output = {};
    for (const pair of pairs) {
        let [key, val] = pair.split('=');

        if (isValUndefinedOrEmtpy(val)) val = 'true';

        if (hasKey(output, key)) output = appendValToKey(output, key, val);
        else output[key] = val;
    }

    return output;

    /**Removes starting question mark */
    function removePrefixedQuestionMark(str: string): string {
        return str.substring(1);
    }

    function hasKeyValPairs(str: string): boolean {
        return str.length !== 0 ? true : false;
    }

    function isValUndefinedOrEmtpy(val: string): boolean {
        return val === undefined || val === "";
    }

    function hasKey(output: OutputType, key: string) {
        if (key in output) return true;
        return false;
    }

    function appendValToKey(output: OutputType, key: string, val: string): OutputType {
        const keyVal = output[key];
        if (Array.isArray(keyVal) && !hasValInArray(keyVal, val)) {
            keyVal.push(val);
        } else if (typeof keyVal === "string" && keyVal !== val) {
            output[key] = [keyVal, val];
        }
        return output;

        function hasValInArray(keyVal: string[], val: string) {
            return keyVal.includes(val);
        }
    }
}



//write tests
// console.log(convertQueryString('?key1=value1&key2=value2'), { key1: 'value1', key2: 'value2', });

// console.log(convertQueryString('?'), {});

// console.log(convertQueryString('?foo'), { foo: 'true' });

// console.log(convertQueryString('?foo='), { foo: 'true' });

// console.log(convertQueryString('?key1=value1&key2=value2&baz'), { key1: 'value1', key2: 'value2', baz: 'true' });

// console.log(convertQueryString('?key1=value1&key2=value2&baz='), { key1: 'value1', key2: 'value2', baz: 'true' });

// console.log(convertQueryString('?key1=value1&key2=value2&key1=value3'), { key1: ["value1", "value3"], key2: "value2" });

console.log(convertQueryString('?key1=value1&key2=value2&key1=value1'), { key1: "value1", key2: "value2" });

console.log(convertQueryString('?key1=value1&key2=value2&key1=value3&key1=value1'), { key1: ["value1", "value3"], key2: "value2" });
