// Implement your own module that exports a an object containing a function. However the function you export should invoke a 'private' function that is defined within your module but not exported from it.
//
// Implement a Node.js script that imports the functionality of your module and invokes at least one exported function.
//

const phi = require ("./testFunctionExport.js");

phi.explain();
