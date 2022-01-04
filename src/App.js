import './App.scss';
import { Form } from './components/Form';
import { User } from './components/User';
import React, { useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  function dataUser(dataUser) {
    let newdata = [];
    newdata.push(dataUser);
    let newdata1 = [...data, ...newdata];
    setData(newdata1);
  }

  return (
    <div className="App">
      <Form dataUser={dataUser}></Form>
      <User data={data}></User>
    </div>
  );
}

export default App;
