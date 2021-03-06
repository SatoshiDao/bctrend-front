/**
 * @param str:string
 * @returns string
 */
function formatCount(str: string) {
    if (typeof str !== 'string') {
        return
    }
    const len = str?.length;
    if (len <= 8) {
        return str;
    }

    return str.slice(0, 4) + "..." + str.slice(len - 4, len);
};

/**
 * 
 * 
 */
function SetByArray(array: { [key: string]: string | number }[], name: string,key:string) {
    // console.log(array)
    let result: { [key: string]: any } = {};
    for (let i = 0; i < array.length; i++) {
        if (!result[array[i][name]]) {
            result[array[i][name]] =array[i]
        }else{
           if(array[i][key]){
            result[array[i][name]] = array[i]
           } 
        }
    }
    return Object.values(result)
}
const sortRule = (a: any, b: any) =>
  (new Date(a) as unknown as number) - (new Date(b) as unknown as number);
const tags=["7D", "1M", "3M", "6M", "1Y", "All"]
export {
    formatCount,
    SetByArray,
    sortRule,
    tags
}