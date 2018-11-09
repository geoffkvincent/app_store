import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const AppView = () => {
  <Header textAlign="center" as="h3">
    Welcome To The
      <Link to="/apps">App Store</Link>
  </Header>
}

export default AppView