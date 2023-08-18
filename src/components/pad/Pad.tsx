import React from 'react';
import Editor from '../editor/Editor';

const Pad = () => {
  const [userInput, setUserInput] = React.useState('');
  return (
    <div>
      <textarea
        rows={5}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>
      <Editor userInput={userInput} />
    </div>
  );
};

export default Pad;
