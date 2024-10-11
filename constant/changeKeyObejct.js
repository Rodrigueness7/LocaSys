const changeKeyObejct = (object, newKey, oldKey) => {
    Object.assign(object, {[newKey]: object[oldKey]});
    delete object[oldKey]
}

module.exports = {changeKeyObejct}