import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("2");
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

//! Flow of ErrorBoundary

// App renders
// ↓
// ErrorBoundary renders Footer
// ↓
// Footer crashes
// ↓
// React finds nearest ErrorBoundary
// ↓
// React calls getDerivedStateFromError()
// ↓
// hasError becomes true
// ↓
// React calls componentDidCatch()
// ↓
// ErrorBoundary re-renders
// ↓
// Fallback UI appears
// ↓
// Rest of app keeps working