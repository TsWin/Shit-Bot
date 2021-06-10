
module.exports.checkCommandModule = (commands, getFileName) => {
    if(!getFileName.hasOwnProperty('name'))
        throw new Error(`${commands} command module does not have property 'name'`);
    if(!getFileName.hasOwnProperty('description'))
        throw new Error(`${commands} command module does not have property 'description`);
    if(!getFileName.hasOwnProperty('aliases'))
        throw new Error(`${cmdNamd} command module does not have property 'aliases'`);
    return true;
}
module.exports.checkProperties = (commands, getFileName) => {
    if(typeof getFileName !== 'function')
        throw new Error(`${commands} command: name is not a function`);
    if(typeof getFileName !== 'string')
        throw new Error(`${commands} command: description is not a string`);
    if(!Array.isArray(getFileName))
        throw new Error(`${commands} command: aliases is not an Array`);
    return true;
}