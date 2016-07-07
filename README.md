# Octothorpe

Creates octothorpes (hash tag / pound sign #) with values in each space.

## Example

```javascript
let octothorpe = require('octothorpe');

let hash = octothorpe('X', ' ', 'O', 'X', 'O', ' ', 'X', ' ', ' ');
/*
 X |   | O
-----------
 X | O |
-----------
 X |   |
*/
```
## Installation
```
$ npm install octothorpe
```
## API
```javascript
var octothorpe = require('octothorpe');
```
### octothorpe(...values)
- parameter {string} value1x1: A value to be placed into cell [1, 1].
- parameter {string} value2x1: A value to be placed into cell [2, 1].
- parameter {string} value3x1: A value to be placed into cell [3, 1].
- parameter {string} value1x2: A value to be placed into cell [1, 2].
- parameter {string} value2x2: A value to be placed into cell [2, 2].
- parameter {string} value3x2: A value to be placed into cell [2, 2].
- parameter {string} value1x3: A value to be placed into cell [1, 3].
- parameter {string} value2x3: A value to be placed into cell [2, 3].
- parameter {string} value3x3: A value to be placed into cell [3, 3].
- returns string: An octothorpe with each of its cells populated with the values provided.
