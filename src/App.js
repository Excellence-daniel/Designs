import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { TryOuts } from './pages/biometrics'
import { Pricing } from './pages/pricing-pages'

export const AppRoutes = () => {
  return (
    <Router>
      <Route path="/biometrics" component={TryOuts} />
      <Route path="/" component={Pricing} />
    </Router>
  )
}
