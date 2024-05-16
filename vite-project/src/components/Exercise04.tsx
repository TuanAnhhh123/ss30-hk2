import React, { useState, ChangeEvent } from 'react';

const Exercise04: React.FC = () => {

  const vietnamCities: string[] = [
    'Hà Nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',

  ];

  const [selectedCity, setSelectedCity] = useState<string>('');


  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>

      <select value={selectedCity} onChange={handleChange}>
        <option value="">Chọn một tỉnh/thành phố</option>
        {vietnamCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>Bạn đã chọn: {selectedCity}</p>
    </div>
  );
};

export default Exercise04;
