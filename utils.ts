export function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('')
}
