'use client'
import React, { useState } from 'react';

const RadioButtonGroup = () => {
  const [selectedDay, setSelectedDay] = useState('thu'); // Default selected value

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return (
    <fieldset className="p-8 bg-white text-black">
        <div className='text-xl font-semibold mb-4'>Radio Group Label</div>
      <div className="flex">
        {days.map((day) => (
          <label
            key={day}
            className={`px-4 py-2 border ${
              selectedDay === day ? 'bg-blue-500 text-white' : 'bg-white'
            } border-gray-300 first:rounded-l last:rounded-r`}
          >
            <input
              type="radio"
              name="days"
              value={day}
              checked={selectedDay === day}
              onChange={() => setSelectedDay(day)}
              className="sr-only"
            />
            {day.charAt(0).toUpperCase() + day.slice(1, 3)}
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioButtonGroup;
