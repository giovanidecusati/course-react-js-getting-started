// Pluralsight Course :: React.js: Getting Started
// Run it at https://jscomplete.com/repl/

const Card = (props) => {
  return (
    <li>      	
        <img src = {props.avatar_url} />
        <div style = {{display: 'inline-block'}} >
          <h1>{props.name}</h1>
          <h2>{props.company}</h2>
      </div>
    </li>
  )
}

const CardList = (props) => {
return (
  <ul>
    {props.cards.map(card => <Card key={card.id} {...card} />)}
  </ul>
)
}

class Form extends React.Component {
state = { userName: ''}

handleSubmit = (event) => {
  event.preventDefault();    
  axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp => {        
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
      });
}
  
render (){
  return (
  <form onSubmit = {this.handleSubmit}>
    <input type="text" 
      value = {this.state.userName}
      onChange = {(event) => this.setState({ userName: event.target.value})}
      placeholder="Github username" required/>
    <button type="submit">Add card</button>
  </form>)
}
}

class App extends React.Component{
state = { cards: [] };

addNewCard = (cardInfo) => {
  this.setState( prevState => ({
    cards: prevState.cards.concat(cardInfo)
  }))
}

render(){
  return (
    <div>
      // onSubmit is Form component property and not the form onSubmit html attribute
      <Form onSubmit = {this.addNewCard} />
      <CardList cards = {this.state.cards} ></CardList> 
    </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);

/* Style

.mountNode {
  color: #333;
}

h1 {
	font-weight:bold;
  font-size:18px;  
}

h2 {
  font-size:14px;  
}

ul {
  list-style: none;    
}

img {
	width: 75px;
}
*/