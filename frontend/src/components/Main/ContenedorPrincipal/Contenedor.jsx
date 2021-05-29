import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }

`
const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`

const Property = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`

const PropertyStreet = styled(Text)`
    font-size: 1rem;
`
const Fecha = styled(Text)`
    width: 15%;
`
const Costos = styled(Text)`
    width: 10%;
`
const TieDepositado = styled.div`
    width: 15%;
`
const Status = styled.div`
    display: flex;
    align-items: center;
`
const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`

const Contenedor = ({ data }) => {
    const { tutor, fecha, costo, deposit, status } = data;

    return (
        <Container>
            <Property>
            <PropertyStreet>{tutor.nombre}</PropertyStreet>
            </Property>
            <Fecha>{fecha}</Fecha>
            <Costos>Q{costo}</Costos>
            <TieDepositado>
                <Text>{deposit.horas}</Text>
            </TieDepositado>
            <Status>
                <Text>{status.message}</Text>
                {(() => {
                    switch (status.level) {
                        case 1: return <StatusIndicator color="#F17E7E" />;
                        case 2: return <StatusIndicator color="#FFD056" />;
                        case 3: return <StatusIndicator color="#75C282" />;
                        default: return <StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </Status>

        </Container>
    )
}

export default Contenedor
