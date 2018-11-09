import React from 'react'
import { Link } from 'reat-router-dom'
import { Header } from 'semantic-ui-react'

const NoMatch = () => {
  <Header as="h3" textAlign="center">
    Page Not Found
      <Link to="/">Home</Link>
  </Header>
}

export default NoMatch