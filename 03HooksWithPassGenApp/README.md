|| Explanation of useEffect ||

Purpose: useEffect allows you to perform side effects in functional components, such as fetching data, subscribing to events, or updating the DOM.

Dependency Array: It accepts a dependency array to control when the effect runs. An empty array ([]) runs the effect only once (on mount), while including variables triggers it when those variables change.

Cleanup: You can return a cleanup function to handle unmounting or cleanup logic (e.g., removing event listeners).

Reactivity: It ensures that the effect runs reactively when dependencies change, making it ideal for responding to state or prop changes.

Asynchronous Tasks: While useEffect itself cannot be async, you can call an async function inside it for operations like API calls.

Use Cases:

Fetching data from APIs when a component mounts or state changes.
Adding and cleaning up event listeners.
Subscribing to WebSocket or real-time data streams.
Updating the document title or other browser properties dynamically.
Implementing timers or intervals and clearing them on unmount.


|| Explanation of useCallBack ||

Purpose: The useCallback hook is used to memoize a function so that it does not get recreated on every render unless its dependencies change.

Performance Optimization: It is primarily used to prevent unnecessary re-creation of functions, especially when passing them as props to child components.

Dependency Array: Similar to useEffect, it accepts a dependency array that determines when the function should be re-memoized.

Avoiding Re-renders: Helps prevent child components from re-rendering when the same function reference is passed, improving performance.


=>Use useCallback when passing functions as props to memoized child components (like React.memo).
=>It helps prevent unnecessary re-renders.
=>Only use useCallback when there's a real performance concern; otherwise, it may add unnecessary complexity.