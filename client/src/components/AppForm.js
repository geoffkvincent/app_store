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
}

export default connect()(AppForm)