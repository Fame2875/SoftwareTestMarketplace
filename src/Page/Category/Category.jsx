import React, { useState } from 'react';
import Itemcard from '../../components/Itemcard';
import itemData from '../../mockdata/itemdata.json';

function Category() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCardMouseEnter = () => {
    setSelectedItem(null);
  };

  const filteredItems = itemData.filter((item) => {
    if (selectedCategory === 'all') {
      return true;
    }
    return item.producttype === selectedCategory;
  });

  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <img className="h-96 w-auto" srcSet="/mockimgs/PTO.png" alt="Store Banner" />
      </div>
      <h1 className="text-2xl font-bold mt-4">Category</h1>
      <div className="grid grid-cols-5 gap-4 mt-4" style={{gridTemplateColumns: "150px 1fr 1fr 1fr 1fr"}}>
        <div className="category-column" style={{ width: "150px", border: "1px solid black", gridRow: "1 / span 5"  }}>
          <label>Categorychoice</label>
          <ul>
            <li onClick={() => handleCategoryClick('all')} className={`category-item ${selectedCategory === 'all' ? 'selected' : ''}`}>All</li>
            <li onClick={() => handleCategoryClick(1)} className={`category-item ${selectedCategory === 1 ? 'selected' : ''}`}>Shoes</li>
            <li onClick={() => handleCategoryClick(2)} className={`category-item ${selectedCategory === 2 ? 'selected' : ''}`}>Bags</li>
            <li onClick={() => handleCategoryClick(3)} className={`category-item ${selectedCategory === 3 ? 'selected' : ''}`}>Watches</li>
          </ul>
        </div>
        {filteredItems.map((item, index) => (
          <div key={index} className="mb-3">
            <Itemcard productname={item.productname} productdetail={item.productdetail} producttype={item.producttype} onClick={handleItemClick} onMouseEnter={handleCardMouseEnter} isSelected={selectedItem?.id === index} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .category-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .category-item:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .selected {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Category;