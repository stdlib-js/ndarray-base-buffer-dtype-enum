<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Buffer Data Type Enumeration Constant

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the data type enumeration constant of an ndarray data buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import dtypeEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype-enum@esm/index.mjs';
```

#### dtypeEnum( buffer )

Returns the [data type][@stdlib/ndarray/dtypes] enumeration constant of an ndarray data [`buffer`][@stdlib/ndarray/base/buffer-ctors].

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
var buf = new Float64Array( 10 );

var c = dtypeEnum( buf );
// returns <number>
```

If provided an ndarray data [`buffer`][@stdlib/ndarray/base/buffer-ctors] having an unknown or unsupported [data type][@stdlib/ndarray/dtypes], the function returns `null`.

```javascript
var c = dtypeEnum( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The principle use case for this function is JavaScript-C interoperability. In C, dtypes are assigned integer enumeration constants, not string values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@esm/index.mjs';
import bufferCtors from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-ctors@esm/index.mjs';
import isFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs';
import dtypeEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype-enum@esm/index.mjs';

var DTYPES;
var ctor;
var buf;
var len;
var c;
var i;

// Get a list of supported ndarray buffer data types:
DTYPES = dtypes();

// Buffer length:
len = 10;

// For each supported data type, create a buffer and retrieve its data type enumeration constant...
for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = bufferCtors( DTYPES[ i ] );
    if ( DTYPES[ i ] === 'binary' && isFunction( ctor.alloc ) ) {
        buf = ctor.alloc( len );
    } else {
        buf = new ctor( len );
    }
    c = dtypeEnum( buf );
    console.log( '%s => %d', DTYPES[ i ], c );
}

// Try an array-like object...
buf = {
    'length': 10
};
c = dtypeEnum( buf );
console.log( '%s => %s', 'generic', c );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-buffer-dtype-enum.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-buffer-dtype-enum

[test-image]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-buffer-dtype-enum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-buffer-dtype-enum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-buffer-dtype-enum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-buffer-dtype-enum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-buffer-dtype-enum/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/esm

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray-base-buffer-ctors/tree/esm

</section>

<!-- /.links -->
