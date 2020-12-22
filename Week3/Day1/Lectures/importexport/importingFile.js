import someCoolName, {varb, someFunc} from "./namedExportingFile.js";
import variableC from "./defaultExportingFile.js";
/* Old syntax, for JS before ES6
const exportingModule = require("./namedExportingFile");
*/
console.log(varb);
someFunc();
someCoolName();

console.log(variableC);
