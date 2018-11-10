import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Header,
  Divider,
  Image,
  Container,
  Table, 
} from 'semantic-ui-react'

const AppView = () => (
  <div>Appview</div>
)

const mapStateToProps = (state, props) => {
  const { id } = props.params.match
  const { apps } = state
}

export default connect(mapStateToProps)(AppView)  