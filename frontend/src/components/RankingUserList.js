import styled from 'styled-components/macro'
import {useState} from "react";

export default function RankingUserList() {
    const [list, setList] = useState('');
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({name});

        setList(newList);
    }

    return (
        <div>
            <div>
                <input type="text" value={name} onChange={handleChange}/>
                <button type="button" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <ul>
                {list.map((name) => (
                    <li key={name.id}>{name.name}</li>
                ))}
            </ul>
        </div>
    );
};
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  li {
    margin: 12px;
    background: var(--primary-color);
    border-radius: 10px;
    border: 2px solid var(--primary-color);
    padding: 10px;
    color: white;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .user-name {
    margin-left: 16px;
  }
`