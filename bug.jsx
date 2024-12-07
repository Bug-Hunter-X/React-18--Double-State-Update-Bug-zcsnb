```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This line is problematic in React 18+
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```