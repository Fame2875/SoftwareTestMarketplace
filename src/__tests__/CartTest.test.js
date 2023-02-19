import { render, screen } from "@testing-library/react";
import Cart from '../components/Cart'

test('Check element header and header table Text show all', () => {
    render(<Cart />);

    const Headerh1 = screen.getByRole('heading', { level: 1 })
    expect(Headerh1).toBeInTheDocument()

    const TableHeader = screen.getByTestId('Table Header')
    expect(TableHeader).toBeInTheDocument()

    const TableHeaderElementName = screen.getByTestId('NameHeader')
    expect(TableHeaderElementName).toBeInTheDocument()

    const TableHeaderElementPrice = screen.getByTestId('PriceHeader')
    expect(TableHeaderElementPrice).toBeInTheDocument()

    const TableHeaderElementQuantity = screen.getByTestId('QuantityHeader')
    expect(TableHeaderElementQuantity).toBeInTheDocument()

    const TableHeaderElementTotalPrice = screen.getByTestId('TotalPriceHeader')
    expect(TableHeaderElementTotalPrice).toBeInTheDocument()
});

test('Check element plus-minus button and trash button in Table', () => {
    render(<Cart />);

    const ProductImg = screen.getByAltText(/Product-Image/i)
    expect(ProductImg).toBeInTheDocument()

    const Plus_Button = screen.getByTestId('plus')
    expect(Plus_Button).toBeInTheDocument()

    const minus_Button = screen.getByTestId('minus')
    expect(minus_Button).toBeInTheDocument()

    const trash_Button = screen.getByTestId('trash')
    expect(trash_Button).toBeInTheDocument()
})

test('Data in Table', () => {

})

test('Check element order summary', () => {
    render(<Cart />);

    const Headerh5 = screen.getByRole('heading', { level: 5 })
    expect(Headerh5).toBeInTheDocument()

    const Quantity_Element = screen.getByTestId('Ordersummary Quantity')
    expect(Quantity_Element).toBeInTheDocument()

    const Subtotal_Element = screen.getByTestId('Ordersummary Subtotal')
    expect(Subtotal_Element).toBeInTheDocument()

    const Total_Element = screen.getByTestId('Ordersummary Total')
    expect(Total_Element).toBeInTheDocument()
})