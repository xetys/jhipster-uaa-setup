# Differences / Implementation Notes

 - currently twig.js does not have the same auto-escaping that Twig does. 
 - Macros are not yet supported

## Feature Support

Built-in Tags:

 - `autoescape`: 
 - `block`: **Supported**
 - `do`: 
 - `extends`: **Supported**
 - `filter`: **Supported**
 - `flush`: N/A
 - `for`: **Supported**
 - `from`: 
 - `if`: **Supported**
 - `import`: 
 - `include`: **Supported**
 - `macro`: 
 - `raw`: 
 - `sandbox`: 
 - `set`: **Supported**
 - `spaceless`: 
 - `use`: **Supported**

Built-in Filters:

 - `capitalize`: **Supported**
 - `convert_encoding`: 
 - `date`: **Supported**
 - `default`: **Supported**
 - `escape`: **Supported**
 - `format`: **Supported**
 - `join`: **Supported**
 - `json_encode`: **Supported**
 - `keys`: **Supported**
 - `length`: **Supported**
 - `lower`: **Supported**
 - `merge`: **Supported**
 - `nl2br`: **Supported**
 - `number_format`: **Supported**
 - `raw`: 
 - `replace`: **Supported**
 - `reverse`: **Supported**
 - `slice`: 
 - `sort`: **Supported**
 - `striptags`: **Supported**
 - `title`: **Supported**
 - `trim`: **Supported**
 - `upper`: **Supported**
 - `url_encode`: **Supported**

Built-in Functions:
 - `attribute`: 
 - `block`: 
 - `constant`: 
 - `cycle`: **Supported**
 - `date`: **Supported**
 - `dump`: **Supported**
 - `parent`: **Supported**
 - `random`: 
 - `range`: **Supported**
    
Built-in Tests: 

 - `constant`: 
 - `defined`: **Supported**
 - `divisibleby`: **Supported**
 - `empty`: **Supported**
 - `even`: **Supported**
 - `iterable`: 
 - `null` / `none`: **Supported**
 - `odd`: **Supported**
 - `sameas`: **Supported**
    
Built-in Operators: 

 - `in`: **Supported**
 - `is`: **Supported**
 - Math (`+`, `-`, `/`, `%`, `*`, `**`): **Supported**
 - Logic (`and`, `or`, `not`, `()`): **Supported**
 - Comparisons (`==`, `!=`, `<`, `>`, `>=`, `<=`, `===`): **Supported**
 - Others (`..`, `|`, `~`, `.`, `[]`, `?:`): **Supported**