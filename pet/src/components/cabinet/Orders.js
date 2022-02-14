import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './Title';

export default function Orders() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/projects/find').then((res) => {
      console.log(res);
      setList((el) => [...el, ...res.data]);
    });
  }, []);

  console.log(list, 'list');
  return (
    <div>
      <Title>Список проектов</Title>
      <ul>
        {list?.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
