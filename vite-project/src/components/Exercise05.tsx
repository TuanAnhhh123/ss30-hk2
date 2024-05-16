import React, { useState } from 'react';

const Exercise05: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(true);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
     
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hiển' : 'Ẩn'}
      </button>
      <p>Trạng thái của button: {isVisible ? 'Hiển thị' : 'Ẩn'}</p>
    </div>
  );
};

export default Exercise05;
