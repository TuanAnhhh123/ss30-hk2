import React, { useState, ChangeEvent } from 'react';

const Exercise03: React.FC = () => {
  const [dateValue, setDateValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  return (
    <div>
    
      <input
        type="date"
        value={dateValue}
        onChange={handleChange} 
        placeholder="Nhập ngày..."
      />
    
      <p>Bạn đã chọn ngày: {dateValue}</p>
    </div>
  );
};

export default Exercise03;
