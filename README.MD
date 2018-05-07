# Animated Scroll

An ES6 plugin written in TypeScript to replicate the easy functionality of the jQuery animate method for smooth scrolling. 

## Usage

```language
animatedScroll(position, duration)
```

where..   

- `position` is the y-offset on the page where you want to scroll to (in px). 
 
- `duration` is how long the scroll animation should take (in milliseconds).

## Example

```
animatedScroll(1400, 400)
```

## Tips

The `position` value of any HTMLElement can easily be extracted by making use of the [getBoundingClientRect() method.](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)