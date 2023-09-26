import {  render, waitFor,screen } from '@testing-library/react';
import Schedules from './pages/schedules';
import PageNotFound from './pages/page-not-found';
import {
    BrowserRouter,
  } from "react-router-dom";

describe('Testing router',()=>{


  test('should load schedule page', async () => {
    const { getByTestId, getByText } = render(
        <BrowserRouter>
          <Schedules />
        </BrowserRouter>
      );
      const heading = getByTestId('heading');
      const text = getByText('Schedules Logs')
      expect(heading).toBeInTheDocument();
      expect(text).toBeInTheDocument();
  })

  test('should load page not found page', async () => {
    const { getByTestId, getByText } = render(
        <BrowserRouter>
          <PageNotFound />
        </BrowserRouter>
      );
      const heading = getByTestId('heading');
      const text = getByText("Page not found! Verify that you've entered the correct URL in the address bar of your web browser.")
      expect(heading).toBeInTheDocument();
      expect(text).toBeInTheDocument();
  })
  
  
})

