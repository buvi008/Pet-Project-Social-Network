import * as React from 'react';
import { useState } from 'react';
// import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Title from './Title';

export default function Orders() {
  const [list, setList] = useState(0);

  function componentDidMount() {
    axios.get('http://localhost:4000/projects/find').then((res) => {
      console.log(res);
      setList({ count: this.state.count + 1 })
    });
  }
  componentDidMount();
  console.log(list);

  return (
    <div>
      <Title>Список проектов</Title>
      <ul>
        {list.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
