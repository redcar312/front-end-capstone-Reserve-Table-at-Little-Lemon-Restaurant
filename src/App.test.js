

import {render, fireEvent, screen} from '@testing-library/react'
import BookingPage from './BookingPage'
import { MemoryRouter } from 'react-router-dom'

describe('Booking Page', () => {
test ("initialize availableTimes", async () => {
  render(
    <MemoryRouter> <BookingPage />
    </MemoryRouter>)
    const availableTimes =  await screen.findAllByTestId('availableTime')
    expect(availableTimes.length).toBeGreaterThanOrEqual(1)



    
})

test("Update available times", async () => {
  render(
    <MemoryRouter> <BookingPage />
    </MemoryRouter>)
  
  const date = '2023-10-10' 
  const input = screen.getByLabelText('Date:')
  const initialTimes = await screen.findAllByTestId('availableTime')
  
  fireEvent.change(input, { target: {value: date}})
  const updatedTimes = await screen.findAllByTestId('availableTime')
  expect(input).toHaveValue(date)
  expect(initialTimes.length).not.toBe(updatedTimes.length)


})

})