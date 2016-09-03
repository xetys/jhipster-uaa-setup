There are several aspects of twig.js that can be extended with custom functionality.

They are:

1. Functions
2. Filters
3. Tests

## Functions

Custom functions can be added through `Twig.extendFunction(name, definition)`

For example, a function that repeats a value could look like:

    Twig.extendFunction("repeat", function(value, times) {
        return new Array(times+1).join(value);
    });

And you can use it in a template like:

    {{ repeat("_.", 10) }}
    {# output: _._._._._._._._._._. #}

## Filters

Custom filters can be added through `Twig.extendFilter(name, definition)`

For example, if you wanted to add a filter that reversed words in a sentence, you could do the following:

    Twig.extendFilter("backwords", function(value) {
        return value.split(" ").reverse().join(" ");
    });

Then, in your templates you can use:

    {{ "a quick brown fox"|backwords }}
    outputs: fox brown quick a

## Tests



## Tags

TBD
