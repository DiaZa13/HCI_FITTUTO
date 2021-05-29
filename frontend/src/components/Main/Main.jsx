import React from 'react'
import styled from 'styled-components'
import Cont from './ContenedorPrincipal/Cont'
import Data from '../../../Data.json'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
    padding-top:  2rem;
`

const Main = () => {
    return (
        <Container>
            <Cont title="Tutorias activas" count={2} data={Data.active} />
            <Cont title="Tutorias Cerradas" count={2} data={Data.closed} />
        </Container>
    )
}

export default Main
