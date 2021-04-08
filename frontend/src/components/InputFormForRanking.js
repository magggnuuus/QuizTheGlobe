import {useState} from 'react'
import styled from 'styled-components/macro'

export default function AddNewUser({onAdd}) {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name || name.length >= 20) {
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
                onChange={event => setName(event.target.value)}
            />
            <button disabled={name.length <= 20 && name.length <= 2} type="submit">
                Add
            </button>
        </Form>
    )
}


const Form = styled.form`
  display: flex;

  input {
    flex-grow: 0,5;
    text-align: center;
    align: center;
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
    font-size : 28px;
      }
`

