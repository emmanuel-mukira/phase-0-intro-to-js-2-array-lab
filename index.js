const cats=[
    "Milo","Otis","Garfield"
];
function destructivelyAppendCat(name){
cats.push("Ralph"); 
}
destructivelyAppendCat;
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
destructivelyPrependCat;
function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat;
function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat;
function appendCat(name){
 cats.splice(3,0,"Broom");
}
function appendCat(name){
 const newCats=[...cats,name];
 return newCats;
}
function prependCat(name){
 const nopCats=[name,...cats];
 return nopCats;
}
function removeFirstCat(){
const neoCats=cats.slice(1);
return neoCats;
}
function removeLastCat(){
const optCats=cats.slice(0,-1);
return optCats;
}