import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Itemcard from '../components/Itemcard';

export function Category() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCardMouseEnter = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="justify-content-center align-items-center d-flex mt-2">
        <img style={{ height: '400px', width: 'auto' }} srcSet="/mockimgs/PTO.png" alt="Store Banner" />
      </div>
      <h1>Category</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        <Itemcard onClick={handleItemClick} onMouseEnter={handleCardMouseEnter} isSelected={selectedItem?.id === 1} />
        <Itemcard onClick={handleItemClick} onMouseEnter={handleCardMouseEnter} isSelected={selectedItem?.id === 2} />
        {/* Add more Itemcard components here */}
      </Row>
    </>
  );
}

export default Category;