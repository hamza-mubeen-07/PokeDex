import React from 'react'

const mockNavigate = jest.fn()

const mockLink = ({
  to,
  children,
  ...props
}: {
  to: string
  children: React.ReactNode
}) => (
  <a
    href={to}
    {...props}
    onClick={(e) => {
      e.preventDefault()
      mockNavigate(to)
    }}
  >
    {children}
  </a>
)

module.exports = {
  ...jest.requireActual('react-router-dom'),
  Link: mockLink,
  useNavigate: () => mockNavigate,
}
