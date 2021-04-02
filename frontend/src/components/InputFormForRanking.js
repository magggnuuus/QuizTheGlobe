import {useState} from 'react'
import styled from 'styled-components/macro'

export default function AddNewUser({onAdd}) {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name) {
            return
        }
        onAdd(name)
        setName('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={({target}) => setName(target.value)}
            />
            <button disabled={!name} type="submit">
                Add
            </button>
        </Form>
    )
}


const Form = styled.form`
  display: flex;

  input {
    flex-grow: 1;
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
  }

  button {
    font-size: 1em;
    font-color: #fff;
    flex-grow: 0.2;
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
  }
`
