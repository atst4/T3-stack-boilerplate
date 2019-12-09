/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as BaseLink } from 'rebass'
import { Link as GatsbyLink } from 'gatsby'

import { Children } from '../../utils/types'

type Props = {
  to: string
  children: Children
  // pass it only to GatsbyLink
  activeClassName?: string
  partiallyActive?: boolean
}

const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}: Props) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName || 'active'}
        partiallyActive={partiallyActive || false}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <BaseLink href={to} {...other}>
      {children}
    </BaseLink>
  )
}
export default Link
