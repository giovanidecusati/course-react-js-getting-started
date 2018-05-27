// Pluralsight Course :: React.js: Getting Started
// Run it at https://jscomplete.com/repl/
// React has two conponents types: Function Component and Class Component

// Class Component 
class Button extends React.Component {
  handleClick = () => {
    this.props.onClickButton(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    );
  }
}

ReactDOM.render(<Button />, mountNode);

// Function Component
const Result = props => {
  return <div>{props.displayValue}</div>;
};

// Just use class component whe you have to manage state, AppRoot component or personalized Handlers
class App extends React.Component {
  state = { counter: 0 };

  // Do not change the state directly when you increment variables (race conditions issues)
  incrementCounter = valueToIncrement => {
    this.setState(currentState => ({
      counter: currentState.counter + valueToIncrement,
    }));
  };

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickButton={this.incrementCounter} />
        <Button incrementValue={3} onClickButton={this.incrementCounter} />
        <Button incrementValue={5} onClickButton={this.incrementCounter} />
        <Result displayValue={this.state.counter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
