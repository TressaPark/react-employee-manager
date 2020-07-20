import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import API from './utils/API';

class App extends Component{
  state = {
    employees: [],
    filteredEmployees: [],
    search: ''
  }
  componentDidMount() {
    API.getUsers().then(users => {
      console.log(users.data.results)
      this.setState({
        employees: users.data.results,
        filteredEmployees: users.data.results
      })
    })
  }
  handleFormChange = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
    const newFiltered = this.state.employees.filter(employee => {
      return employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())
    })
    // console.log(newFiltered)
    this.setState({
      filteredEmployees: newFiltered
    })
  }
  render() {
    return (
      <div>
        <input
          value={this.state.search}
          name="search"
          onChange={this.handleFormChange}  
        >
        </input>
        <Table 
          employees={this.state.filteredEmployees}
        />
      </div>
    );
  }
}

export default App;
