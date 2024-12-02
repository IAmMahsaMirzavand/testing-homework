// explain the difference between getBy, findBy, queryBy:




// In the context of React Testing Library, getBy, findBy, and queryBy are utility functions that help you locate elements in your rendered component. Each has its own behavior and use case. Here's a breakdown of their differences:

// 1. getBy:
// Synchronous: getBy is used when you're confident the element should exist immediately in the DOM.
// Throws an error if the element is not found.
// Use case: When you expect the element to be present in the DOM at the time the test runs.
// Example:



// const button = screen.getByText('Submit');
// expect(button).toBeInTheDocument();
// If the Submit button is not found, this will throw an error, causing the test to fail.

// 2. findBy:
// Asynchronous: findBy is used when you're waiting for an element to appear asynchronously (for example, after a fetch call or some other delayed event).
// Returns a Promise: It resolves when the element is found, or rejects if it doesn't appear within the default wait time (or a custom timeout).
// Use case: When you expect the element to appear after some delay (e.g., after an API call, animation, etc.).
// Example:


// const button = await screen.findByText('Submit');
// expect(button).toBeInTheDocument();
// Here, the test waits for the button to appear, which is useful if it’s rendered asynchronously (e.g., after fetching data).

// 3. queryBy:
// Synchronous: queryBy is similar to getBy, but instead of throwing an error when the element is not found, it returns null.
// Does not throw an error if the element is absent, which allows you to test for the absence of elements.
// Use case: When you want to check if an element is not present in the DOM.
// Example:


// const button = screen.queryByText('Submit');
// expect(button).toBeNull(); // Check if the button is not present
// This will pass if the button is not in the DOM and will return null if it's not found.

// Summary:
// getBy: Use when the element must be present in the DOM immediately (throws an error if not found).
// findBy: Use when the element will appear asynchronously (returns a Promise).
// queryBy: Use when you want to check for the absence of an element (returns null if not found).
// These utilities help you tailor your tests depending on how the UI elements are rendered and whether you expect them to appear immediately or after some asynchronous operation.