# React Best Practices

This folder contains small examples for learning React and JavaScript best practices. Har example ek common pattern, mistake, ya cleanup idea dikhata hai for quick learning and revision.

## Topics Covered

### Arrow Functions

- Teaches readable inline callbacks and event handlers.
- Key takeaway: handler ko clear rakho and required data explicitly pass karo.
- Example: `const handleBuy = (item) => console.log(item);` then `<button onClick={() => handleBuy(item)}>Buy</button>`.

### Clean JSX

- Teaches optional chaining, small UI branches, and readable JSX.
- Key takeaway: heavy logic ko `return` ke bahar calculate karo.
- Example: `const name = user?.name ?? "Guest";` then `<h1>Hello, {name}</h1>`.

### Cleanup Usage

- Teaches cleanup for timers, listeners, and subscriptions inside `useEffect`.
- Key takeaway: component unmount hone par side effects clean karo.
- Example: `useEffect(() => { const id = setInterval(loadData, 1000); return () => clearInterval(id); }, []);`

### Conditional Rendering

- Teaches ternary, `&&`, and explicit boolean checks.
- Key takeaway: simple conditions make UI behavior predictable.
- Example: `{isLoggedIn ? <Dashboard /> : <Login />}` or `{items.length > 0 && <List />}`.

### Config Driven UI

- Teaches generating repeated UI from configuration data.
- Key takeaway: copy-pasted JSX ki jagah data ko `.map()` karo.
- Example: `{buttons.map(({ id, label }) => <button key={id} onClick={handlers[id]}>{label}</button>)}`.

### CSS In JS

- Teaches how new object references can re-render memoized children.
- Key takeaway: reusable or stable style objects ko component ke bahar rakho.
- Example: `const cardStyle = { padding: 16 };` then `<MemoCard style={cardStyle} />`.

### Dependency Array

- Teaches which reactive values belong in a `useEffect` dependency array.
- Key takeaway: effect me used changing props/state include karo; `ref.current` usually dependency nahi hoti.
- Example: `useEffect(() => { loadUser(userId); }, [userId]);`.

### Destructuring

- Teaches clean props and object destructuring with defaults.
- Key takeaway: meaningful names ke saath destructuring code ko easy banata hai.
- Example: `function Profile({ name = "Guest", age }) { return <p>{name}, {age}</p>; }`.

### Div As Button

- Teaches accessibility and event bubbling in clickable elements.
- Key takeaway: actions ke liye real `<button>` use karo.
- Example: `<button type="button" onClick={handleSave}>Save</button>`; nested clicks me zarurat ho tab `event.stopPropagation()` use karo.

### DOM Manipulation

- Teaches why React state is preferred over direct DOM changes.
- Key takeaway: React ko UI manage karne do; manual DOM access rare cases ke liye hai.
- Example: `const [active, setActive] = useState(false);` then `<div className={active ? "active" : ""} />`.

### Error Boundary

- Teaches class-based error boundaries and fallback UI for render crashes.
- Key takeaway: risky UI sections ko boundary se wrap karo so full app crash na ho.
- Example: `static getDerivedStateFromError() { return { hasError: true }; }` and render `<Fallback />` when `hasError` is true.

### Error Boundary Issues

- Teaches what error boundaries do not catch, such as event-handler and async errors.
- Key takeaway: async/event code ke liye `try/catch` bhi needed hai.
- Example: `try { await saveData(); } catch (error) { setError(error.message); }`.

### Fetch Data

- Teaches API calls, loading/error state, repeated fetches, and cancellation.
- Key takeaway: unmount ke baad state update avoid karo and intervals clean karo.
- Example: `useEffect(() => { const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort(); }, [url]);`.

### Folder Structure

- Teaches grouping components, hooks, constants, utils, styles, and tests.
- Key takeaway: related files ko feature ke paas rakho so code jaldi mil sake.
- Example: `ProductCard/ProductCard.jsx`, `ProductCard/styles.css`, and `ProductCard/ProductCard.test.jsx`.

### Fragments

- Teaches returning sibling elements without an unnecessary DOM wrapper.
- Key takeaway: extra `<div>` ki need nahi ho to fragment use karo.
- Example: `return <><Header /><Main /></>;`.

### Function Prop Naming

- Teaches clear naming for functions passed from parent to child.
- Key takeaway: event props ko `on...` and local handlers ko `handle...` name karo.
- Example: `<Product onBuy={handleBuy} />` and inside child: `<button onClick={onBuy}>Buy</button>`.

### Gigantic Component

- Teaches splitting a large component by responsibility.
- Key takeaway: nav, content, forms, and footer ko focused components me divide karo.
- Example: `return <><Navbar /><ProductList /><Footer /></>;`.

### Immutability State

- Teaches updating arrays and objects without mutating existing state.
- Key takeaway: state ka new copy banao; direct `push` or property assignment mat karo.
- Example: `setItems((items) => [...items, newItem]);` and `setUser((user) => ({ ...user, name: "Aman" }));`.

### Key Prop

- Teaches stable keys while rendering and updating lists.
- Key takeaway: database/data ID use karo, array index nahi.
- Example: `{users.map((user) => <User key={user.id} user={user} />)}`.

### Lazy Loading

- Teaches `React.lazy`, dynamic imports, and `Suspense` fallbacks.
- Key takeaway: heavy or rarely used components ko need par load karo.
- Example: `const Settings = lazy(() => import("./Settings"));` then `<Suspense fallback={<Loader />}><Settings /></Suspense>`.

### Logging

- Teaches useful development logs and production error tracking.
- Key takeaway: random logs ke bajay meaningful context record karo.
- Example: `console.error("Checkout failed", { orderId, error });` and production me logging service use karo.

### Modifying Props

- Teaches that props are read-only.
- Key takeaway: child me prop mutate mat karo; derived value ya copied object banao.
- Example: `const fullName = user.firstName + " " + user.lastName;` instead of changing `user.name`.

### Passing Props

- Teaches explicit props versus prop spreading.
- Key takeaway: required props clearly pass karo; unnecessary data avoid karo.
- Example: `<Profile name={user.name} avatar={user.avatar} />` is clearer than `<Profile {...user} />`.

### Prop Types

- Teaches defining expected prop values and shapes.
- Key takeaway: JavaScript projects me PropTypes, larger projects me TypeScript useful hai.
- Example: `Profile.propTypes = { name: PropTypes.string.isRequired, age: PropTypes.number };`.

### Rayta

- Teaches consistent component organization and import ordering.
- Key takeaway: third-party imports, local components, utils, constants, and styles ka fixed order rakho.
- Example: `import React from "react";` first, local imports next, and `import "./styles.css";` last.

### Ref List

- Teaches storing multiple DOM element references with callback refs.
- Key takeaway: refs direct DOM access ke liye use karo, normal UI data ke liye nahi.
- Example: `<input ref={(element) => { inputRefs.current[index] = element; }} />`.

### Ref vs Var

- Teaches the difference between variables, refs, and state.
- Key takeaway: state UI re-render karta hai; ref value persist karti hai without re-render.
- Example: `const [count, setCount] = useState(0);` for UI and `const timerRef = useRef(null);` for a timer ID.

### Reusable Components

- Teaches shared components with consistent props and variants.
- Key takeaway: repeated UI behavior/style ko one reusable component me rakho.
- Example: `<Button size="medium" variant="primary" onClick={handleSave}>Save</Button>`.

### Use Me Early

- Teaches `useReducer` for multiple related form values.
- Key takeaway: related state updates grow ho rahe hon to reducer code ko organized rakhta hai.
- Example: `const reducer = (state, action) => ({ ...state, [action.name]: action.value });`.

### Use Me Not

- Teaches avoiding unnecessary duplicate/derived state and broken handler logic.
- Key takeaway: filtered values ko existing data se calculate karo when possible.
- Example: `const filteredUsers = users.filter((user) => user.name.includes(query));` instead of storing another synced array.

## Quick Revision

- [ ] Keep JSX simple; heavy logic ko `return` ke bahar rakho.
- [ ] Never mutate state or props directly.
- [ ] Use stable IDs as list keys, not array indexes.
- [ ] Clean timers, intervals, listeners, requests, and subscriptions.
- [ ] Add real reactive values to `useEffect` dependencies.
- [ ] Use semantic elements such as `<button>` for actions.
- [ ] Split large components and reuse repeated UI.
- [ ] Use state for UI and refs for mutable values or DOM access.
- [ ] Handle loading, errors, cleanup, and cancellation in API calls.
- [ ] Keep imports, files, hooks, handlers, and JSX consistently organized.
