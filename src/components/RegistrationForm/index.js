// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {username: '', password: '', activeOpt: 'opt1', checkArr: []}

  onSubmitForm = event => {
    event.preventDefault()
    console.log('form submitted')
    console.log(this.state)
  }

  renderState = () => {
    const {username, password, activeOpt, checkArr} = this.state
    const checkList = checkArr.join(',')
    return (
      <div className="bg-ctn">
        <h1>username : {username}</h1>
        <h1>password : {password}</h1>
        <h1>selected option : {activeOpt}</h1>
        <h1>selected checkbox : {checkList}</h1>
      </div>
    )
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeDropdown = e => {
    this.setState({activeOpt: e.target.value})
  }

  onChangeCheckbox = event => {
    const {checkArr} = this.state
    const {value, checked} = event.target
    if (checked) {
      this.setState({checkArr: [...checkArr, value]})
    } else {
      this.setState({checkArr: checkArr.filter(e => e !== value)})
    }
  }

  render() {
    return (
      <div className="form-ctn">
        <form onSubmit={this.onSubmitForm}>
          <h1>Form</h1>
          <label htmlFor="username">Username</label>
          <br />
          <input id="username" type="text" onChange={this.onChangeUsername} />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            onChange={this.onChangePassword}
          />
          <br />
          <select onChange={this.onChangeDropdown}>
            <option>opt1</option>
            <option>opt2</option>
            <option>opt3</option>
          </select>
          <br />
          <label htmlFor="cb1">
            <input
              id="cb1"
              type="checkbox"
              onChange={this.onChangeCheckbox}
              value="CB1"
            />
            CB1
          </label>
          <label htmlFor="cb1">
            <input
              id="cb2"
              type="checkbox"
              onChange={this.onChangeCheckbox}
              value="CB2"
            />
            CB2
          </label>
          <label htmlFor="cb3">
            <input
              id="cb3"
              type="checkbox"
              onChange={this.onChangeCheckbox}
              value="CB3"
            />
            CB3
          </label>
          <button type="submit">SUBMIT</button>
        </form>
        {this.renderState()}
      </div>
    )
  }
}

export default RegistrationForm
