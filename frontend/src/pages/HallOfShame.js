import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export default function UserList({users}) {
    return (
        <List>
            {users.map((user) => (
                <li key={user.name}>
                    <Link to={`/user/${user.name}`}>
                        <img src={user.avatar} alt={user.name}/>
                        <span className="user-name">{user.name}</span>
                    </Link>
                </li>
            ))}
        </List>
    )
}

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