```javascript
import React from "react";
import useDarkSide from "use-dark-side";

function YourComponent() {
  const [colorTheme, setTheme] = useDarkSide();

  // Your component logic here

  return (
    <div className={colorTheme === "dark" ? "dark-theme" : "light-theme"}>
      {/* Your component UI here */}
    </div>
  );
}
```

## Example

Here's a simple example of how to use the `useDarkSide` hook in your React component:

```javascript
import React from "react";
import useDarkSide from "use-dark-side";

function ThemedComponent() {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleTheme = () => {
    setTheme(colorTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className={colorTheme === "dark" ? "dark-theme" : "light-theme"}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Your themed component UI here */}
    </div>
  );
}
```
