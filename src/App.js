import React, { useState } from 'react';
import './App.css';
import Form from './components/forms/Form.jsx';

function App() {
  const [text, updateText] = useState('');
  const [num, updateNum] = useState('');
  const [tel, updateTel] = useState('');
  const [choice, updateChoice] = useState('');
  const [checkboxes, updateCheckboxes] = useState(false);
  const [validity, setValidity] = useState({});

  function submitForm(event) {
    event.preventDefault();
    alert(JSON.stringify({ text, num, tel, choice }, null, 2));
  }
  function resetForm() {
    updateText('');
    updateNum('');
    updateTel('');
    updateChoice('');
  }
  const onCheckboxChange = () => {
    updateCheckboxes(!checkboxes);
  }
  return (
    <div className="App">
      <Form onSubmit={submitForm} onReset={resetForm} reportErrors={setValidity}>
        <div>
          <label htmlFor="text">Text:</label>
          <input id="text" type="text" name="text" required minLength="2" maxLength="6" value={text} onChange={event => updateText(event.target.value)} />
          { validity.text && !validity.text.valid && <small>Error here</small>}
        </div>
        <div>
          <label>Number:</label>
          <input name="number" type="number" min="2" max="6" value={num} onChange={event => updateNum(event.target.value)} />
          { validity.number && !validity.number.valid && <small>Error here <br/> { JSON.stringify(validity.number) }</small>}
        </div>
        <div>
          <label>Email:</label>
          <input name="email" required type="email" value={tel} onChange={event => {
            updateTel(event.target.value)
          }} />
          { validity.email && !validity.email.valid && <small>Error here <br/> {JSON.stringify(validity.email, null, 2)} </small>}
        </div>
        <div>
          <label>Select:</label>
          <select name="select" value={choice} required onChange={event => updateChoice(event.target.value)}>
            <option></option>
            <option value="1">Choice 1</option>
            <option value="2">Choice 2</option>
          </select>
          { validity.select && !validity.select.valid && <small>Error here</small>}
        </div>
        <div>
          <label>Checkbox group: </label>
          <ul>
            <li>
              <label>
                <input required name="terms" type="checkbox" onChange={onCheckboxChange} checked={checkboxes} value={checkboxes} />  
                  Terms
              </label>
            </li>
          </ul>
          { validity.terms && !validity.terms.valid && <small>Error here</small>}
        </div>
      </Form>
    </div>
  );
}

export default App;
