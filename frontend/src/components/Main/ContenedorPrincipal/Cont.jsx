import React from 'react'
import styled from 'styled-components'
import SortingBar from './SortingBar'
import Contenedor from './Contenedor'

const Container = styled.div`
`
const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`
const CuentaTutorias = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`
const Cont = ({ title, data, count }) => {
    return (
        <Container>
            <Title>{title}<CuentaTutorias>{count}</CuentaTutorias></Title>
            <SortingBar />
            {data.map(deposit => (
                <Contenedor data={deposit} key={deposit.tutor.nombre} />
            ))}
        </Container>
    )
}
export default Cont
