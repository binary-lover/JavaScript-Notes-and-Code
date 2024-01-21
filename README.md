<h1 align="center">Aasan hai..!</h1>

* The following table summarizes the possible return values of typeof. For more information about types and primitives, see also the JavaScript data structure page.
<img src = "01_basics\result of diff types of datatypes.png">

## Main topics of Ec6

* The let keyword   &#x2714;
* The const keyword &#x2714;
* Arrow Functions &#x2714;
* The ... Operator &#x2714;
* For/of &#x2714;
* Map Objects &#x2714;
* Set Objects
* Classes
* Promises
* Symbol &#x2714;
* Default Parameters &#x2714;
* Function Rest Parameter &#x2714;
* String.includes() &#x2714;
* String.startsWith() &#x2714;
* String.endsWith() &#x2714;
* Array.from() &#x2714;
* Array.keys() &#x2714;
* Array.find() &#x2714;
* Array findIndex() &#x2714;
* New Math Methods &#x2714;
* New Number Properties &#x2714;
* New Number Methods &#x2714;
* New Global Methods &#x2714;
* Object entries &#x2714;
* JavaScript Modules

## JavaScript Execution Context

* Code Divide into mainly 2 parts
  * Global Execution Context (refer by a keyword `this`) Window object for browser. Always decleared
  * Function Execution Context
  * Eval Execution Context (in MongoDB)

* Runs in 2 Phases
  * Memory **Creation phase** (crete memory for variables)
  * Execution Phase

* step of code execution of the following code

    ```
        let val1 = 10;
        let val2 = 5;
        function addNum(num1, num2){
            let total = num1 + num2;
            return total;
        }
        let result1 = addNum(val1, val2);
        let result2 = addNum(10,2);
    ```

  * **Global Execution**
    * Global Execution => `this` keyword

  * **Creation phase:**
    * val1 = `undefined`
    * val2 = `undefined`
    * addNum = definition of function
    * result1 = `undefined`
    * result2 = `undefined`

  * **Execution Phase:**
    * val1 <-- 10
    * val2 <-- 5
    * addNum --> New Executional Context
      * New Variable environment and Execution Thread are made

      * **Memory Phase:**
        * val1 <-- `undefined`
        * val2 <-- `undefined`
        * total <-- `undefined`
      * **Execution Phase:**
        * num1 = 10
        * num2 = 5
        * total = 15 (return to global execution context)
      * **Delete after return**

    * addNum --> New Executional Context
      * New Variable environment and Execution Thread are made
      * **Memory Phase:**
        * val1 <-- `undefined`
        * val2 <-- `undefined`
        * total <-- `undefined`
      * **Execution Phase:**
        * num1 = 10
        * num2 = 2
        * total = 12 (return to global execution context)
      * **Delete after return**

* Call Stack
    ![callstack](https://miro.medium.com/v2/resize:fit:1400/1*rJ2sh-q1deQGGGVG5gYyIQ.png)

# Synchronous and Asynchronous

* Default Javascript is a synchronous and single threaded
  * here each operation waits for the last one to complete before execution.

* Block code : Block the program
* Non-block code: does not block execution.
