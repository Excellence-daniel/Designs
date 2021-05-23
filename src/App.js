import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { TryOuts } from './pages/biometrics'

export const AppRoutes = () => {
  return (
    <Router>
      <Route path="/biometrics" component={TryOuts} />
    </Router>
  )
}
