import * as React from 'react'
import {Link as RouterLink} from "react-router-dom";

const Link = ({children, to, ...other}) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <RouterLink to={to} {...other}>
        {children}
      </RouterLink>
    )
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
