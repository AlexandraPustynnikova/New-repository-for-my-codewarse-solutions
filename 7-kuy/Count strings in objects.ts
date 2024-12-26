/*
Create a function strCount (takes an object as argument) that will count all string values inside an object.*/

   function strCount(obj){
// в цикле for in для каждого значения объекта проверить в условии typeOf, приплюсовать.
for (let key in obj){
    if (typeof (obj[key])==='string'){
        let count = 0
        count++
    }
}
}


   // Test cases:
//returns 3
strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
})