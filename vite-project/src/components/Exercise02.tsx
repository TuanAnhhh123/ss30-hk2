import React, { useState, ChangeEvent } from 'react';

const Exercise02: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
     
      <input
        type="text"
        value={inputValue}
        onChange={handleChange} 
        placeholder="Nhập dữ liệu..."
      />
     
      <p>Bạn vừa nhập: {inputValue}</p>
    </div>
  );
};

export default Exercise02;
