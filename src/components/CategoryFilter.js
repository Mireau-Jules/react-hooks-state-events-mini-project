import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
          key={category} 
          className={selectedCategory === category ? "selected" : null}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


