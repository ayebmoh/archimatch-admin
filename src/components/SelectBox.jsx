// components/SelectBox.js
const SelectBox = ({ label, options, selectedValue, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
      <option value=""  placeholder="select" disabled hidden>select version </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
