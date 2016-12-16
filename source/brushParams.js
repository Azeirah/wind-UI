// because brush parameters are not numbers, but super-tiny js programs
// use this function to evaluate their values.
function evalBrushParams(parameters, pointer) {
    return Object.keys(parameters).reduce(function (params, key) {
        try {
            params[key] = eval(parameters[key]);
        } catch (e) {
            params[key] = 0;
        }
        return params;
    }, {});
}
