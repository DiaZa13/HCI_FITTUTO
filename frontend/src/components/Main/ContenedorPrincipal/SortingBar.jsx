import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 2rem 0;
    border-radius: 5px;
`
const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`
const Tutor = styled(Text)`
    width: 700px;
`
const Fecha = styled(Text)`
    width: 55%;
`
const Costo = styled(Text)`
    width: 40%;
`
const Horas = styled(Text)`
    width: 45%;
`
const Status = styled(Text)`
    width: 800px;
`

const SortingBar = () => {
    return (
        <Container>
            <Tutor>Tutor</Tutor>
            <Fecha>Fecha</Fecha>
            <Costo>Costo</Costo>
            <Horas>Horas</Horas>
            <Status>Status</Status>
        </Container>
    )
}

export default SortingBar
