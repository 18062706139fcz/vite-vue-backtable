// 先把值保留，如果没错误就处理之后返回，否则返回有错误的。
export function localGet (key) {
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return value;
    }
}

export function localSet (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove (key) {
    window.localStorage.removeItem(key);
}