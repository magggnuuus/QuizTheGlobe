import styled from "styled-components/macro";

export default function Header() {
    return (
        <Container>
            <h1>Around the World</h1>
        </Container>
    )
}

const Container = styled.header`
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
