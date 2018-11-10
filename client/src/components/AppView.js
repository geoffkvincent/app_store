import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { 
  Header,
  Divider,
  Image,
  Container,
  Table, 
} from 'semantic-ui-react'

const AppView = ({ app }) => (
  <div>{app.name}</div>
)

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  const { apps } = state
  const app = apps.find( a => a.id === parseInt(id, 10) )
  return {app}
}

export default connect(mapStateToProps)(AppView)  