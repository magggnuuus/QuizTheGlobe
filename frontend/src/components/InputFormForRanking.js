import {useState} from 'react'
import styled from "styled-components/macro";

export default function AddNewUser({onAdd}) {
    const [user, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!user || user.length >= 20) {
            return
        }
        onAdd(user)
        setName('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={user}
                onChange={event => setName(event.target.value)}
            />


            <FunkyButton disabled={user.length <= 20 && user.length <= 2} type="submit">
                Add user
            </FunkyButton>

        </Form>
    )
}


const Form = styled.form`
  display: flex;
  align-self: center;
   flex-direction: column;
justify-content: center;

  input {
  
    flex-grow: 0,6;
    display: inline-block;
    align-self: center;
    text-align: center;
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 12px;
    margin: 12px;
    font-size : 28px;
      }
`

const FunkyButton = styled.button`
flex-grow: 0,6;
    display: inline-block;
    align-self: center;
    text-align: center;


      background-color: blueviolet;
      margin: 25px;
    border: none;
    color: black;
    padding: 40px;
    text-align: center;
    text-decoration: none;
    
    font-size: 28px;
    background: linear-gradient(currentColor 0 0) var(--p, 100%) 0,
    linear-gradient(currentColor 0 0) 0 var(--d, 0),
    linear-gradient(currentColor 0 0) var(--d, 0) 100%,
    linear-gradient(currentColor 0 0) 100% var(--p, 100%);
    background-size: var(--d, 0) 3px, 3px var(--d, 0);
    background-repeat: no-repeat;
    transition: 0.5s, background-position 0s 0.5s;
&:hover {
    background-color: lightgoldenrodyellow;
    --d: 100%;
    --p: 0%;
}

&:disabled {
    color: grey;
    opacity: 0.1;
    cursor: default;
}
`