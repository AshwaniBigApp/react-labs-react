import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:
      [
        {
          "id":1,
          "name":"Ashwani",
          "age":"20"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <table class="table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(
                (person, i) => <TableRow key = {i} data = {person} />            
              )
            }
          </tbody>
        </table>
        <Content />
      </div>
    );
  }
}
class TableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}
class Header extends React.Component{
  render(){
    return(
      <div>
        Header WOrks
      </div>
    )
  }
}

class Content extends React.Component{
  render(){
    return(
      <div>
        Content Works
      </div>
    )
  }
}
export default App;
