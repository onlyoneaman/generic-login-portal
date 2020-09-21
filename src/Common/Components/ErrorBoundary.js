import React from "react";

class ErrorBoundary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error: error.toString()});
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return(
        <div className="vertically-center">
          <h1>Something went wrong - Reason -> "{this.state.error}"</h1>
          <h2>Please mail this to support with above error reason.</h2>
        </div>
      );
    }

    return this.props.children;
  }

}

export default ErrorBoundary