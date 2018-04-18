# CSS

## Code Style

### Stylelint

We use Stylelint to lint our CSS. You can use with the command line, or with webpack using the Stylelint webpack plugin. We have a custom configuration for WHQ that you should use called stylelint-config-whq. Add to the extends block of your Stylelint configuration:

```
"extends": "stylelint-config-whq"
```

Stylelint will take care of most of our CSS code style rules. However, there are a few additional ones to keep in mind.

### Additional Rules

#### Pseudo-classes

* Alphabetize (if multiple).
* Pseudo-class before pseudo-element.

```css
li:first-child {}
li:first-child:not(.hide) {}
```

#### Pseudo-elements

Pseudo-element is always last (after pseudo-classes).

```css
a::before {}
a:first-child::before {}
```

#### HSL, RGB, RGBA

No space before opening parenthesis.

```css
button {
  color: hsl(25, 25, 25);
  color: rgba(0, 0, 0, 0.2);
}
```

### Comments
CSS should be compiled with a pre/post processor today. This enables single-line `//` comments that don’t exist in the CSS spec.

#### Comment formats
Use single-line comments `// comment` instead of multi-line comments `/* comment */`. This lets you span legitimate comments with code you’d like to temporarily cancel out.

```css
// Single line comments are great.
.hello {
    color: red;
}
```

```css
/*
// Only use multi-line comments to enclose groups of code.
.goodbye {
    color: blue;
}
*/
```

// TODO: update

## Properties

### Property Order

We keep consistent order of CSS properties by maintaining a list in a shared stylelint config.
The logic of our ordering is generally:

* Display
* Position model
* Flex model
* Grid model
* Float model
* Box model
* Table options
* Visual box
* Typography
* Animation
* Transform
* Transition
* Pointer + selection
* Generated content

Notice that (within each group) properties are almost always alphabetized or use clockwise rotation `top|right|bottom|left`. This helps the order stay predictable and new developers only need to learn the group order.

### Vendor Prefixes

We use the PostCSS plugin [https://github.com/postcss/autoprefixer](Autoprefixer) to support vendor prefixes intelligently. The build process does the heavy lifting. You define the browsers you need to support using [https://github.com/ai/browserslist](browserslist) and it uses data from [http://caniuse.com/](Can I Use) to insert only the prefixed properties you need.

## Best Practices

### Specificity

#### Chaining

Avoid chaining selectors ad infinitum. This creates a specificity mess.

```css
// Good
.search_button {}

// Bad
.header .search-box input[type=search] + .button {}
```

#### Reducing specificity

Try avoiding nesting more than three levels deep. It's better to just give every element a unique class and keep your css file flatter.

It's better to select single classes than chained elements.

```css
// Good
.account-header {}
.account-header-nav {}
.account-header-link {}

// Bad
header {}
header nav {}
header nav a {}
```

#### IDs and classes

Always avoid using an ID if possible.

#### !important

Never use `!important` to raise the specificity of a rule. In well architected CSS this should never be required. If you think it is, rewrite the rules being inherited with high specificity that are causing problems.

#### Naming

// TODO

### Nesting

Keep nesting three levels deep or less. Generally, try and avoid nesting and use specific classes instead.

There are a few cases where it is completely acceptable to use nesting:

1. Pseudo-classes
2. Pseudo-elements
3. Interaction states

#### Pseudo-classes

```css
.cake-list_item {
  border-top: 5px dotted pink;
  &:first-child {
    border-top: 0;
  }
}
```

#### Pseudo-elements
The `::before` and `::after` pseudo-elements only exist in relation to their parent. Since this relationship is implied and immovable, nesting provides ideal context.

```css
.icon {
  @include image-replacement;
  &::before {
    content: '';
  }
}

.icon--cake::before {
  @include icon (cake);
}
```

#### Hover states

```css
.button {
  color: blue;
  &:hover {
    color: red;
  }
  &:active {
    color: green;
  }
}
```

### Variables

// TODO

### Media Queries

// TODO

### Mobile First

// TODO

## Tools & Frameworks

### Tools

// TODO: preprocessors, postCSS
// TODO: reset
// TODO: autoprefixer
// TODO: critical CSS

### Frameworks

You can use a framework like Bootstrap, Foundation or Bulma for larger projects, but for smaller projects these can be unnecessary. Better would be to use a basic reset and then build your own styles.

HiQ provides a basic reset, foundational styling and responsive typography: [https://github.com/jonathanharrell/hiq](https://github.com/jonathanharrell/hiq). It is built with PostCSS.
