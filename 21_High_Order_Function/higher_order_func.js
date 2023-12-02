//High Order Functions

//A higher order function is a function that does at least one of the following 
//*** Takes one or more  function as an argument (parameter)
//*** Return a function as is result


// forEach()
import {posts} from './posts.js'

posts.forEach(post=>{
    console.log(post)
})

//filter---> helps select specific data from results
console.clear()
const fitlerPosts=posts.filter((post)=>{
    return post.userId===5;
})
console.log(fitlerPosts)



//map--->lets you transform the data
const mapppedPost=fitlerPosts.map((post)=>{
    return post.id*10;
})
console.log(mapppedPost)


//reduce() ---> compute a single value from the data
const reducePosts=mapppedPost.reduce((sum,post)=>{
    return sum+post;
})
console.log(reducePosts)




