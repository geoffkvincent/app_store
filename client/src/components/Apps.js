import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getApps } from '../reducers/apps'
import {
  Container,
  Header,
  Card,
  Image,
} from 'semantic-ui-react'

class Apps extends React.Component {
  componentDidMount() {
    this.props.dispatch(getApps())
  }
  render() {
    return (
      null
    )
  }
}

const mapStateToProps = (state) => {
  return { apps: state.apps }
}

export default connect(mapStateToProps)(Apps)