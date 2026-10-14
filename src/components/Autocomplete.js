import React, { useState } from "react";

const Autocomplete = ({ suggestions = [] }) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const query = value.trim().toLowerCase();
  const filtered = query
    ? suggestions.filter((s) => s.toLowerCase().includes(query))
    : [];

  const handleChange = (e) => {
    setValue(e.target.value);
    setOpen(true);
  };

  const handleSelect = (s) => {
    setValue(s);
    setOpen(false);
  };

  return (
    <div>
      <label htmlFor="city">Search cities of India:</label>
      <br />
      <input
        id="city"
        type="text"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul>
          {filtered.map((s) => (
            <li key={s} onClick={() => handleSelect(s)}>
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;