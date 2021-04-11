import styled from "styled-components/macro";

export default function Header() {
    return (
        <Container>
            <Logoimg src={process.env.PUBLIC_URL + 'pictures/logo.png'} alt="logo"/>
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
margin: 5px;
    align-self: center;
    border-radius: 4px;
    padding: 5px;
    width: 170px;
}
@keyframes rotation {
  50% {
    transform: rotate(360deg);
  }
 
}


`

