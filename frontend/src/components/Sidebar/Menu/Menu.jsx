import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Pagina de Inicio" icon={'home'}/>
            <MenuLink title="Sesiones" icon={'file-multiple'} active />
        </Container>
    )
}

export default Menu
