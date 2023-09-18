//1. what is react and its role for single page application
/*
react is a javascript libaray for building user interface in web applications
Its role for single page application is to dynamically update the same page when the user interacts without leaving page


single page application means in entire application 
we will have only one html file, content of your pages render dynamically on the runtime
 
*/
//2. how react is faster compared to other javascript frameworks
/*
React uses virtual dom to manage updates. It minimizes the number of DOM manipulations. 
*/
//3. what is virtual dom
/*
Virtual dom is an in-memory representation of the acutal dom object 
*/
//4. how react renders dom in conservative manner
/*
React does not update the actual dom. Insetead it creates a virtual dom and compares this virtual dom to the previous one. 
It identifies the difference between the virtual dom and previous one and calculates the number of changes needed to update the actual dom
*/
//5. create a class component named - Success and show some quotes on success in its