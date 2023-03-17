import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { fetchData as mockFetchData } from '../utils/api.js'
import Item from '../Page/item/Item'
jest.mock('../utils/api.js')

test('renders App', async () => {
  mockFetchData.mockImplementation((callBack) => {
    callBack([
      {
        name: 'test1',
        price : 99,
        description : "Good bad",
        amount : 5,
      },
    ])
  })
  render(<Item />);

  expect(mockFetchData).toBeCalledTimes(1)
  // debug(container)
  await waitFor(() => {
    const name = screen.getByText(/test1/i)
    expect(name).toBeInTheDocument()
    const price = screen.getByText(/99/i)
    expect(price).toBeInTheDocument()
    const description = screen.getByText(/Good bad/i)
    expect(description).toBeInTheDocument()
    const amount = screen.getByText(/5/i)
    expect(amount).toBeInTheDocument()
  })
})
