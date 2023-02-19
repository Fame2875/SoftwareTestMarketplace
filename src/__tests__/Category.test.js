// import { render, screen } from '@testing-library/react';
// import Category from '../Page/Category/Category';

// describe('Category', () => {
//   it('renders the component', () => {
//     render(<Category />);
//     expect(screen.getByText('Category')).toBeInTheDocument();
//   });

//   it('renders all items by default', () => {
//     render(<Category />);
//     expect(screen.getByText('Shoes')).toBeInTheDocument();
//     expect(screen.getByText('Bags')).toBeInTheDocument();
//     expect(screen.getByText('Watches')).toBeInTheDocument();
//   });
// });
import { render, screen, fireEvent } from '@testing-library/react';
import Category from '../Page/Category/Category';
import itemData from '../mockdata/itemdata.json';

describe('Category', () => {
  test('renders the category header', () => {
    render(<Category />);
    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  test('renders all item cards by default', () => {
    render(<Category />);
    itemData.forEach(item => {
      expect(screen.getByText(item.productname)).toBeInTheDocument();
      expect(screen.getByText(item.productdetail)).toBeInTheDocument();
      expect(screen.getByText(item.producttype)).toBeInTheDocument();
    });
  });

  test('filters items by category', () => {
    render(<Category />);
    fireEvent.click(screen.getByText('Bags'));
    itemData.filter(item => item.producttype === 'Bags').forEach(item => {
      expect(screen.getByText(item.productname)).toBeInTheDocument();
      expect(screen.getByText(item.productdetail)).toBeInTheDocument();
      expect(screen.getByText(item.producttype)).toBeInTheDocument();
    });
    itemData.filter(item => item.producttype !== 'Bags').forEach(item => {
      expect(screen.queryByText(item.productname)).not.toBeInTheDocument();
      expect(screen.queryByText(item.productdetail)).not.toBeInTheDocument();
      expect(screen.queryByText(item.producttype)).not.toBeInTheDocument();
    });
  });

  test('selects an item when clicked', () => {
    const handleItemClick = jest.fn();
    render(<Category />);
    fireEvent.click(screen.getByText(itemData[0].productname));
    expect(handleItemClick).toHaveBeenCalledWith(itemData[0]);
  });

  test('clears the selected item when a card is hovered over', () => {
    render(<Category />);
    fireEvent.click(screen.getByText(itemData[0].productname));
    fireEvent.mouseEnter(screen.getByText(itemData[1].productname));
    expect(screen.queryByText(itemData[0].productname)).not.toHaveClass('selected');
  });
});
