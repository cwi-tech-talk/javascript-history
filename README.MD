# Tech Talk
## Javascript History

#### Roadmap

1. Brief JavaScript History
2. Brief ECMAScript History
3. Javascript engines / browsers
4. ECMAScript 5 browser support
5. ECMAScript 6 (2015) browser support
6. Propostas para o futuro
7. ES2015 hands on (bonus)
8. References

---

### 1. Javascript History

#### 1.1. Goals

* Animation, interaction, automation
* Interact with DOM
* For non-developers
* Small, simple, dynamic
* Netscape / Oak deal
* Be a companion for Java
* Java-like syntax

#### 1.2. Timeline

* [1995, May] First prototype of Mocha / Livescript was integrated with Netscape Navigator
* [1995, Dec] First Javascript release was integrated in Netscape Navigator 2.0
* [1995, Dec] Microsoft enters into the race with the JScript 
* [1996, Jun] Work on the standard for JavaScript was started
* [1996, Aug] First JScript release was integrated with Internet Explorer 3.0
* [1996, Nov] ECMA starts the standardization of Javascript based on SpiderMonkey *

> \* Mocha became Livescript then became SpiderMonkey

---

### 2. ECMAScript History

#### 2.1. Releases

* [1997] ECMAScript 1 - First Release
* [1998] ECMAScript 2 - Editorial changes only
* [1999] ECMAScript 3 - Added Regular Expressions | try/catch
* [2009] ECMAScript 5 - Added "strict mode" | JSON support
* [2015] ECMAScript 6 - Added classes and modules and a lot og things
* [2016] ECMAScript 7 - Added exponential operator | Array.prototype.includes

> ECMAScript 4 - Was never released

#### 2.2. Changes

##### 2.2.1 ECMAScript 1 - Just standardization of Mocha

##### 2.2.2 ECMAScript 2 - Just fix inconsistencies between ECMA and the ISO standard

##### 2.2.3 ECMAScript 3 - First big changes

* Regular expressions
* The do-while block
* Exceptions and the try/catch blocks
* More built-in functions for strings and arrays
* Formatting for numeric output
* The in and instanceof operators
* Much better error handling
> AJAX was born, but was not a ecma standard at the time

##### 2.2.4 ECMAScript 4 - Dark side of Javascript

* Classes
* Interfaces
* Namespaces
* Packages
* Optional type annotations
* Optional static type checking
* Structural types
* Type definitions
* Multimethods
* Parameterized types
* Proper tail calls
* Iterators
* Generators
* Instrospection
* Type discriminating exception handlers
* Constant bindings
* Proper block scoping
* Destructuring
* Succint function expressions
* Array comprehensions

The '*treta*' has been planted.<br>
Strong differences in the committee started to appear.

> Stronger Language Team
> <br>- Features to become a stronger language for large-scale application
> <br>- Big changes, scope and impact

> Lightweight Language Team
> <br>- Simple, small and dynamic language
> <br>- Small and incremental changes

##### 2.2.5 ECMAScript 5 - The redemption of Javascript

* Trailing commas in array and object literals
* Reserved words as property names
* New `Object` methods (`create`, `defineProperty`, `keys`, `seal`, `freeze`, `getOwnPropertyNames`, etc.)
* New `Array` methods (`isArray`, `indexOf`, `every`, `some`, `map`, `filter`, `reduce`, etc.)
* `String.prototype.trim` and property access
* New `Date` methods (`toISOString`, `now`, `toJSON`)
* Function `bind`
* JSON (`JSON.stringify` and `JSON.parse`)
* Immutable global objects (`undefined`, `NaN`, `Infinity`)
* Strict mode
* Other minor changes (`parseInt` ignores leading zeroes, etc.)

> ECMAScript 5 is a rename from ECMAScript 3.1

##### 2.2.6 ECMAScript 6 (2015) - The rise of Javascript

* Constants
* Scoped function and variable
* Arrow functions
* Default parameter
* Rest parameters (`...arr`)
* Spread operator (`[1, 2, ...anotherArray]`)
* Template literal (\`a${x}b\`)
* Binary (`0b011010`) and octal (`0o567`) literals
* Unicode string support
* Enhanced regular expressions (**wtf?**)
* Property shorthand (`obj = { x: x, y: y } ==> obj = { x, y }`)
* Computed property name (`obj = { foo: 'bar', ['b' + 'a' + 'r']: 'foo' }`)
* Method properties (`obj = { foo: function(a, b) {} } ==> obj = { foo(a, b) {} }`)
* Array matching (`[ a, , b, d = 'd' ] = ['a', 'x', 'b']`)
* Object matching (`{ a, b, c: { cx } } = { a: '1', b: '2', c: { cx: '2' } }`)
* Parameter matching (`function foo ({ name, val }) { console.log(name, val)}`)
* Module (`export` / `import`)
* Class definition (`class`, `constructor`)
* Class inheritance (`extend`)
* Base class access (`super`)
* Static member (`static`)
* Setter (`set width (width) { this._width = width; }`)
* Getter (`get width ()      { return this._width;  }`) 
* Symbol type (`Symbol("foo") !== Symbol("foo")`)
* Iterator
* For-of (`for (let item of collection)`)
* Generators (`yield`)
* Set (unique value)
* Map (key/value | unique key)
* Typed arrays (**wtf?**)
* Object property assignment (`$.extend` ==> `Object.assign(dst, src1, src2)`)
* Array find (`arr.find(x => x > 1)`)
* String repeat (`'x'.repeat(3) === 'xxx'`)
* String search (`startsWith` | `endsWith` | `includes`)
* Number checking (`Number.isNaN` | `Number.isFinite` | `Number.isSafeInteger` | `Number.EPSILON` | `Math.trunc` | `Math.sign`)
* Promise (bittencourt)
* Proxying
* Reflection (`Reflect.ownKeys(obj)`)
* Collation (`new Intl.Collator("de").compare`)
* Number formatting (`new Intl.NumberFormat("en-US").format(123456.78)`)
* Currency formatting (`new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(123465.78)`)
* Datetime formatting (`new Intl.DateTimeFormat("en-US").format(new Date())`)

##### 2.2.7 ECMAScript 7 (2016) - A process improvement

* Array includes (`[1,2,3,4].inludes(3) === true`)
* Exponentiation operator (`3 ** 2 === 9`)
* New release process works:

> New features are only included after they are completely ready and after there were at least two implementations that were sufficiently field-tested.

> Releases happen much more frequently (once a year) and can be more incremental.

##### 2.2.8 Official Naming

* `ECMAScript 1` | ES1
* `ECMAScript 2` | ES2
* `ECMAScript 3` | ES3
* `ECMAScript 5` | ES5 [renamed from ES3.1]
* `ECMAScript 2015` | ES2015 [also known as ES6]
* `ECMAScript 2016` | ES2016 [also known as ES7]

---

### 3. Javascript engines / browsers

- Google V8
  - Chrome
  - Nodejs *
  - Android Browser
  - Opera (> 12.15)
  
- Mozilla SpiderMonkey (Mocha)
  - Netscape
  - Firefox
  
- Microsoft Chakra
  - Internet Explorer
  - Edge
  
- Javascript Core
  - Safari
  - iOS Safari
  - PhantomJS *
  - JXA (javascript automation for OSX) *
  
- Carakan
  - Opera (<= 12.15)

> \* server / runtime engine

---

### 4. ECMAScript 5 browser support

- [2012-07-24] Safari 6
- [2012-09-03] IE 10
- [2012-09-24] Chrome 23
- [2013-01-27] iOS Safari 6.1
- [2013-04-01] Firefox 21 
- [2013-07-01] Opera 15
- [2013-12-08] Android browser 4.4
- [2015-07-28] Edge 12

---

### 5. ECMAScript 6 (2015) browser support

- [100%] Safari 10
- [100%] iOS Safari 10
- [ 97%] Chrome 56 | Nodejs 7 (TCO *, `Regex.compile`)
- [ 94%] Firefox 51 (TCO *, `Unicode`, iterator closing [`Set` | `Map`], `Array.values`, ect...)
- [ 93%] Edge 14 (TCO *, iterator closing [`Set` | `Map`], `Symbols`, etc...)
- [ 25%] Android browser 5.1
- [ 11%] IE 11 

> \* TCO - Tail Call Optimisation

---

### 6. Propostas para o futuro

#### 6.1 ES2017 Expected Changes

* Object values (`Object.values({ one: 1, two: 2 }) = [ 1, 2 ]`)
* Object entries (`Object.entries({ one: 1, two: 2 }) = [ [ 'one', 1 ], [ 'two', 2 ] ]`)
* Object getOwnPropertyDescriptors (get all descriptors)
* String padStart (`'4'.padStart(3, '0') = '004'`)
* String padEnd (`'4'.padEnd(3, '0') = '400'`)
* Trailing commas in function parameter lists and calls (`[1,2,] = [1,2]`)
* Async Functions (another talk here)
* Shared memory and atomics (another talk serie here)

---

### 7. ES2015 hands on (bonus)

> Open up Visual Studio Code!

---

### 8. References

* [Javascript History](https://auth0.com/blog/a-brief-history-of-javascript)
* [ECMAScript Editions](http://www.w3schools.com/js/js_versions.asp)
* [ES5 Compatibility](http://kangax.github.io/compat-table/es5)
* [ES2015 Compatibility](http://kangax.github.io/compat-table/es6)
* [ES2015 News](http://es6-features.org)
* [ES2016 News](http://www.2ality.com/2016/01/ecmascript-2016.html)
* [ES2017 News](http://www.2ality.com/2016/02/ecmascript-2017.html)
* [Shared Array Buffer](http://www.2ality.com/2017/01/shared-array-buffer.html)
* [Tail Call Optimisation](http://www.2ality.com/2015/06/tail-call-optimization.html)
* [Future Proposals](https://github.com/tc39/ecma262/blob/master/README.md)
