# HTML

## Code Style

### Formatting and Whitespace

* Lowercase tag name
* Lowercase attribute name
* Use double-quotes for attribute values (not single-quotes)

```html
<img src="#">
```

### Attribute order

// TODO

### Attribute Overload

More than three attributes to break onto separate lines. Here is the convention we use:

```html
<button
    type="button"
    class="button"
    id="coordinates-button"
    data-loading="Loading..."
    data-x="123"
    data-y="789"
>
    Send Coordinates
</button>
```

### Indentation

Use 4 spaces (not tabs) for indentation.

```html
<ul>
    <li>Item<li>
<ul>
```

### Void Elements

Void elements don’t need a corresponding closing tag (unless using JSX).

```html
<br>
<hr>
<img>
<input>
<link>
<meta>
```

### Comments

Typically, we don't use HTML comments. Markup should be straightforward and well-structured enough that comments are unnecessary. Including them actually tends to slow readers of your code down.

In case where HTML comments are absolutely necessary, they should be wrapped in the backend/templating language, or stripped out during HTML minification.

```html
<?php
// GravDept:
// See: Issue 12345
?>
<p>Lorem ipsum dolor sit amet.</p>
```

### Nesting

#### When to nest

Write elements without attributes on one line:

```html
<p>The quick brown fox jumps.</p>
```

Write elements with attributes nested:

```html
<p class="lead">
    The quick brown fox jumps.
</p>
```

Write elements with multi-line content nested:

```html
<p>
    The quick brown fox jumps.
    Do or do not — there is no try.
</p>
```

#### Single-child nesting

Sometimes, child elements may be most readable without whitespace. This may generally happen when:

* Each line is under 80 characters
* Each line is nested less than two levels deeper

```html
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

A good example of multi-level HTML that still benefits from single-line nesting is anchors within lists:

```html
<ul>
    <li><a href="#">One</a></li>
    <li><a href="#">Two</a></li>
    <li><a href="#">Three</a></li>
</ul>
```

#### Multi-child nesting

Use a single blank line to break up complex hierarchies. Separate child elements with a single blank line.

```html
<ul>
    <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor.</p>
    </li>
    <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor.</p>
    </li>
    <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor.</p>
    </li>
</ul>
```

## Conventions

### Using Classes

* Classes can be stacked (and should). Take advantage of this modularity.
* Our convention is generally to use a base class (e.g. button) and then append modifiers using the is-* convention (e.g. is-primary).
* Classes are case sensitive. Only use lowercase letters for consistency.
* Use class-based CSS selectors over element-based selectors.

```html
<button class="button is-primary">
    Add To Cart
</button>
```

### Using IDs

Hash-linking is probably the only way IDs should be used today.

```html
<a href="#content">
    Skip to content
</a>
```

Never use IDs for CSS styling. Try and avoid using them for JS as well.

## Best Practices

### Semantics

#### HTML5 elements

Use HTML5 elements where appropriate:

```html
<aside></aside>
<figure></figure>
<figcaption></figcaption>
<header></header>
<footer></footer>
<main></main>
<nav></nav>
<section></section>
```

However, like all generic elements they should be qualified with a class to define their role or context. Don’t use rely on the parent/child relationship in selector chains to style them unless using scoped styles.

```html
<header class="page-header">
    ...
</header>
```

#### Document outline

The document hierarchy follows the HTML5 outlining algorithm. The heading outline (`<h1>` – `<h6>`) does not need to be hierarchical globally. HTML5 sectioning elements are used to new outlining contexts.

The heading hierarchy may be restarted within any element that creates a new sectioning context. The document outlining model in HTML5 combines the heading levels and sectioning hierarchy to assemble the document hierarchy.

Technically, you could use only `<h1>` elements if you wanted to, but this makes styling more difficult so it’s not recommended. If a section of content merits its own hierarchy, then use a sectioning element.

Never choose a heading level based on the global styling applied to that element though. There are conventions in CSS to swap the styling of another heading level consistently and in a maintainable way.

```html
<div class="primary">
    <h1>Page Title</h1>
    <article>
        <h1>Article Title</h1>
        <p>Llorem ipsum dolor sit amet.</p>
        <h2>Article Subtitle</h2>
        <p>Curabitur vulputate, ligula lacinia scelerisque tempor.</p>
        <h2>Article Subtitle</h2>
        <p>Curabitur vulputate, ligula lacinia scelerisque tempor.</p>
    </article>
    <article>
        <h1>Article Title</h1>
        <p>Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
    </article>
</div>
<aside>
    <h1>Related Articles</h1>
    ...
</aside>
```
