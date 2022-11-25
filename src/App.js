import React, { Fragment } from 'react';

//Component imports
import Header from './components/header';
import Main from './components/main';
import Post from './components/post';

// Stylesheet imports
import './styles/header.css';
import './styles/main.css';
import './styles/post.css';
import './styles/@media.css';

function App() {
  return (
    <Fragment>
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Main Post={Post} />
    </Fragment>
  )
}

export default App