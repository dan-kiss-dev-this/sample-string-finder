import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => (props.primary ? 'black' : 'green')};
  border-radius: 3px;
  border: none;
  color: white;
`

const StyledComponent = () => {
    return (
        <Button primary>StyledComponent</Button>
    )
}

export default StyledComponent