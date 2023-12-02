//concept of closure in js function equals to the understanding of nested function, plus function scope//
function outer(){
    console.log('outer')
    function inner(){
        console.log('inner')
    }
}
// inner()//undefined
outer()