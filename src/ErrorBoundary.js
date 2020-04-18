// Mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

// Like a wrapper component, which catches any errors in the components it wraps.
// Otherwise it doesn't do anything
// Kind of like <React.StrictMode>Children</React.StrictMode>
class ErrorBoundary extends Component {
  state = { hasError: false, hasRedirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error ", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ hasRedirect: true }), 3000);
    }
  }

  render() {
    if (this.state.hasRedirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error in the listing. <Link to="/">Click Here</Link> to
          go back to homepage{"  "}
        </h1>
      );
    }

    // If no error, then it just passes the wrapping children as it is
    return this.props.children;
  }
}

export default ErrorBoundary;
