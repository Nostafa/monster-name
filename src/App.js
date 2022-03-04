import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFaild: '',
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchFaild } = this.state;
    const monsterFilter = monsters.filter((ele) => {
      return ele.name.toLowerCase().includes(searchFaild.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="monster Name"
          handelChange={(e) => {
            this.setState({ searchFaild: e.target.value });
          }}
        />
        <CardList monsters={monsterFilter} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <CardList />
//     </div>
//   );
// }

export default App;
