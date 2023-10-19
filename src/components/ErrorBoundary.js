import React, { Component } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state when an error occurs
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error information
    console.error("Error:", error);
    console.error("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>We apologize for the inconvenience.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Usage:
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>;

export default ErrorBoundary;
