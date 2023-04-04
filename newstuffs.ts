// match function

function logVowels(value: string): void {
    console.log(value.match(/[aeiou]/gi))
}

logVowels('hello world') //  ['e', 'o', 'o']





/*

null == null - true
undefined == undefined - true

undefined == null - true // to check whether it's undefined or null
result == null - this will check either it's null or undefined
result != null - to check neither null or undefined

false == null - false
0 == null - false
'' == null - false

*/