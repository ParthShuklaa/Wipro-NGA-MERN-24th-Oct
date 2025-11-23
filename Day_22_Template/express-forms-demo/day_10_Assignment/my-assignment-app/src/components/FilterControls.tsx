import React from "react";

interface FilterControlsProps {
  onFilterEven: () => void;
  onDouble: () => void;
  onReset: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  onFilterEven,
  onDouble,
  onReset,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={onFilterEven}>Show Even Numbers</button>
      <button onClick={onDouble}>Double Numbers</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default FilterControls;
