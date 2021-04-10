import styled from "styled-components/macro";

export default function Header() {
    return (
        <Container>
            <h1><Logoimg src={process.env.PUBLIC_URL + 'pictures/logo.png'} alt="logo"/></h1>
        </Container>
    )
}

const Container = styled.header`
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Logoimg = styled.img`

   animation: rotation 2s;
   animation-duration: 2s;

    align-self: center;
    border-radius: 4px;
    padding: 5px;
    width: 180px;
}
@keyframes rotation {
  50% {
    transform: rotate(360deg);
  }
 
}


`

