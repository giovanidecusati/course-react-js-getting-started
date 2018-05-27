// Pluralsight Course :: React.js: Getting Started
// Run it at https://jscomplete.com/repl/

let data = [
  {
    name: 'Giovani Decusati',
    photo: 'https://avatars1.githubusercontent.com/u/6051863?s=460&v=4',
    company: 'Readify',
  },
  {
    name: 'Name One',
    photo: 'https://avatars2.githubusercontent.com/u/6051862?s=460&v=4',
    company: 'Readify',
  },
  {
    name: 'Name Two',
    photo: 'https://avatars2.githubusercontent.com/u/6051861?s=460&v=4',
    company: 'Readify',
  },
];

const Card = props => {
  return (
    <li>
      <img src={props.photo} />
      <div style={{ display: 'inline-block' }}>
        <h1>{props.name}</h1>
        <h2>{props.company}</h2>
      </div>
    </li>
  );
};

const CardList = props => {
  // props.cards.map :: like a foreach to iterate in elements
  // {...card} :: ECMA6 explode the properties
  return <ul>{props.cards.map(card => <Card {...card} />)}</ul>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <CardList cards={data} />
      </div>
    );
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