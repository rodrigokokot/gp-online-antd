import React from 'react'
import { Route } from 'react-router-dom';

const LoginLayout = ({ children }) => (
  <>
    {children}
  </>
);

const LoginTemplate = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <LoginLayout className="">
        <Component {...props} />
      </LoginLayout>
    )} />
  )
}

export default LoginTemplate
