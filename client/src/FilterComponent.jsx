import React from "react";

export default function FilterComponent ({ onFilter, onClear, filterText })  {
  return (
    <div className="flex align-center" >
      <input
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={onFilter}
        style={{
          padding: "8px",
          border: "2px solid #2196F3", 
          borderRadius: "8px 0 0 8px", 
          outline: "none", 
        }}
      />
      <button
        onClick={onClear}
        style={{
          padding: "8px",
          paddingRight: "10px",
          border: "2px solid #2196F3", 
          borderRadius: "0 8px 8px 0", // Border radius for the button
          backgroundColor: "#2196F3", // Blue background color for the button
          color: "white", // White text color for better contrast
          cursor: "pointer", // Show pointer cursor on hover
        }}
      >
        X
      </button>
    </div>
  );
};

