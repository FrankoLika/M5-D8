import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { List, XLg } from 'react-bootstrap-icons';
import "../styles/Body.css"
import "../styles/PriceBtns.css"

function FixedColumnSx({ range, priceFunctionMax15, priceFunctionMin15, setPriceRange }) {
  const [showOptions, setShowOptions] = useState(false);
  const [MenuBurger, setMenuBurger] = useState(true)

  const handleMenuBurger = () => {
    setMenuBurger(!MenuBurger)
  }
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div
      style={{ position: 'fixed', left: -1, top: -1, bottom: 0, width: "250px" }}
      className='Body border border-right bg-light'
    >
      <Nav className="flex-column">
        <Nav.Link
          onClick={handleShowOptions}
          className='text-black fw-bold fs-3'
        >
          {MenuBurger
            ? <List onClick={handleMenuBurger} size={40} />
            : <XLg onClick={handleMenuBurger} size={40} />}
        </Nav.Link>
        {showOptions && (
          <ul className='ul'>
            <h6>Price:</h6>
            <li>
              <Button variant='warning' className='btnPrice'
                onClick={() => {
                  setPriceRange(false)
                  priceFunctionMax15(range)
                }
                }
              >
                15€-
              </Button>
            </li>
            <li>
              <Button variant='danger' className='btnPrice'
                onClick={() => {
                  setPriceRange(true)
                  priceFunctionMin15(range)
                }
                }
              >
                15€+
              </Button>
            </li>
          </ul>
        )}
      </Nav>
    </div>
  );
}

export default FixedColumnSx;
