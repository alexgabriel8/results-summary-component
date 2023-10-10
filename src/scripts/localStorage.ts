export function getLocalStorageItem(key: string) {
    let value = localStorage.getItem(key) ?? null
    if(value === null) return value

    if(value.match(/^[\[\{]/) !== null && value?.match(/[\]\}]$/) !== null) value = JSON.parse(value)
    else if (value.match(/[0-9]+/) !== null) return parseFloat(value)
    else if (value === "true") return true
    else if (value === "false") return false

    return value
}

export function saveOnLocalStorage(key: string, value: unknown) {
    if(!key) return console.error(`Tried to save falsy key. Key: "${key}"`);
    if(typeof value === 'object' && value !== null && Object.keys(value).length === 0) return console.error('Tried to save empty object');

    ['object', 'array'].includes(typeof value)
        ? localStorage.setItem(key, JSON.stringify(value))
        : localStorage.setItem(key, value as string)
}