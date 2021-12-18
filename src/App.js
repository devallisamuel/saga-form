import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch action that stores data in state
    let form = {
      name,
      email,
      password,
      phone
    }
  }
  return (
    <div className="App">
      <div className='form'>
      <form onSubmit = {handleSubmit}>
        <label>Name:
        <input type="text"  placeholder='name' onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Email:
        <input type="text"  placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        </label>Phone:
        <input type="number" placeholder='number' onChange={(e) => setPhone(e.target.value)}  />
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
