import React from 'react'
import { connect } from 'react-redux'
import {updateApp, addApp} from '../reducers/apps'
import {Form} from 'semantic-ui-react'

class AppForm extends React.Component {
  initialState = {
    name: '',
    descriptions: '',
    category: '',
    price: '',
    version: '',
    author: '',
  }

  state = {...this.initialState}

  handleChange = (e) => {
    const{ name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {

  }

  render() {
    const { name, description, category, price, version, author } = this.state
    return (
      <Form>
        <Form.Input 
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
      </Form>
    )
  }
}

export default connect()(AppForm)