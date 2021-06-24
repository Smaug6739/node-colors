# Colors console  
  
This module contains useful functions for manipulate colors and have colors in node.js console.  
  
## Convert colors  
  
### convertHexToRGB  

Convert hexadecimal color code to RGB color code  
  
Params  

* hexColor : Hexidecimal color code `string`  

Return :

* RGB color code `Object`

```js
ColorsConverter.convertHexToRGB('#fff') // Output {r:255, g:255, b:255}
```

### convertRGBToHex

Convert RGB color code to hexadecimal color code  
  
Params  

* RGB : RGB color code `Object`  

Return :

* RGB color code `Object`

```js
ColorsConverter.convertHexToRGB({ r:255, g:255, b:255 }) // Output #ffffff
```

## Colors  

### find

Find a color by name, hex code, RGB code
  
Params  

* arg : The argument `string`
* Options : The options `Object`  

Return :

* Color `Object`

```js
ResolveColor.find("Orange", {limit : 1, sortBy:'name'})
```

### findByName

Find a color by name, hex code, RGB code
  
Params  

* arg : The argument `string`
* Options : The options `Object`  

Return :

* Color `Object`

```js
ResolveColor.findByName("Orange")
```

### findByHex

Find a color by hex code
  
Params  

* arg : The argument `string`
* Options : The options `Object`  

Return :

* Color `Object`

```js
ResolveColor.findByHex("#fff")
```

### findByRGB

Find a color by RGB code
  
Params  

* arg : The argument `string`
* Options : The options `Object`  

Return :

* Color `Object`

```js
ResolveColor.findByRGB('(255, 255, 255)')
```

## Bash

### color

Display color in console
  
Params  

* word : The word to color.
* Color : A name of color

Return :

* Color text. `string`  

```js
ColorsConsole.color('Hello world', 'fgBlue')
```

### addColor

Add color to the list.
  
Params  

* name : Name of color `string`
* value : RGB color value

Return :

* `undefined`

```js
ColorsConsole.addColor('darkRed', '#8B0000')
```

### addColors

Add color to the list.
  
Params  

* Array<\name, value>

Return :

* `undefined`

```js
ColorsConsole.addColors(['darkRed', '#8B0000'])
```

### bold

Change text to bold.
  
Params  

* text : The text `string`  

Return :

* Bold attribute

```js
ColorsConsole.bold('Hello world')
```

### italic

Change text to italic.
  
Params  

* text : The text `string`  

Return :

* Italic attribute

```js
ColorsConsole.italic('Hello world')
```

### underline

Change text to underline.
  
Params  

* text : The text `string`  

Return :

* Underline attribute

```js
ColorsConsole.underline('Hello world')
```

### reverse

Reverse text colors
  
Params  

* text : The text `string`  

Return :

* Reverse attribute

```js
ColorsConsole.reverse('Hello world')
```

### reset

Reset text colors and attributes
  
Params  

* text : The text `string`  

Return :

* Reset attributes

```js
ColorsConsole.reset('Hello world')
```
