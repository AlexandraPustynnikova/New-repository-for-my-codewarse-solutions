/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be ca*/

function toCamelCase(str) {
    //  let arr=str.split('_')
    let arr=str.split(/[-_]+/)
//if (str==arr){arr=str.split('-')}

    const upperCasedFirstCharacterArr = arr.map((item, index) => {
        if (index >= 1) {

            return item.charAt(0).toUpperCase()+item.slice(1) }
        else{
            return item
        }
    })
    return upperCasedFirstCharacterArr.join('')
}


// Test cases

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('The-StealthWarrior'));
console.log(toCamelCase('aPippi_isKawaii'));