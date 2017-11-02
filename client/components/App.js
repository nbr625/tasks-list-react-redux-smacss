import React from 'react';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
