import React from 'react';
import './App.css';
import ErrorBoundary from "./Common/Components/ErrorBoundary";
import Home from "./Home";

function App() {
  const WrapperHome = (props) => {
    return(
      <ErrorBoundary>
        <Home {...props} />
      </ErrorBoundary>
    )
  }

  return (
    <WrapperHome />
  )
}

export default App;
