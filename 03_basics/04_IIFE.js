// Immediately Invoked Funciton Expressions (IIFE)

// Global scope se problem ko hatane k lie IFFE use krte h
(function chai(){
    console.log(`DB Connected`);
})();

// Another way 

( (name) => {
    console.log(`DB Connected ${name}`);
})("lucky");  // arguement is pass here
