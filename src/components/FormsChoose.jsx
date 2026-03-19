import { useState } from 'react';
import Submit from './Form/Submit';
import Prize from './Form/Prize';

export default function FormsChoose() {
  const [selectedForm, setSelectedForm] = useState(null);

  if (selectedForm === 'submit') return <Submit />;
  if (selectedForm === 'prize') return <Prize />;

  return (
    <div className="forms-choose">
      <h2>Choose a Form</h2>
      <p>Select the form you want to fill out:</p>
      <div className="form-buttons">
        <button onClick={() => setSelectedForm('submit')}>
          Submit a Project
        </button>
        <button onClick={() => setSelectedForm('prize')}>
          Claim a Prize
        </button>
      </div>
    </div>
  );
}