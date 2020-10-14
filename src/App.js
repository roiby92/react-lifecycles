import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  async getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users")
  }

  async componentDidMount() {
    const response = await this.getUsers()
    this.setState({ users: response.data })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App" id="people">
        {this.state.users.map(u => {
          return <User key={u.id} userData={u} />
        })}
      </div>
    );
  }
}

export default App;
class User extends Component {
  render() {
    const user = this.props.userData
    return (
      <div className="person"><div className="name">{user.name}</div><div>{user.email}</div></div>
    )
  }
}

class Timer extends Component {

  constructor() {
    super()
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() })
      console.log("Updated time")
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return <div> {this.state.time.toLocaleTimeString()}</div >
  }
}