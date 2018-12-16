import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Sep = () => <span> | </span>;

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/:id">Catalog</Link> <Sep />
      <Link to="/design/grocery/:id">Another</Link> <Sep />
      <Link to="/groceries">Nested</Link>
      <Link to="/manage/grocery/:id">Nested</Link>
      <hr/>
    </div>
  )
}

const HeaderDepartment = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/:id">Catalog</Link> <Sep />
      <Link to="/design/grocery/:id">Another</Link> <Sep />
      <Link to="/groceries">Nested</Link>
      <Link to="/manage/grocery/:id">Nested</Link>
      <hr/>
    </div>
  )
}

const HeaderIngredient = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/:id">Catalog</Link> <Sep />
      <Link to="/design/grocery/:id">Another</Link> <Sep />
      <Link to="/groceries">Nested</Link>
      <Link to="/manage/grocery/:id">Nested</Link>
      <hr/>
    </div>
  )
}
const HeaderShoplist = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/:id">Catalog</Link> <Sep />
      <Link to="/design/grocery/:id">Another</Link> <Sep />
      <Link to="/groceries">Nested</Link>
      <Link to="/manage/grocery/:id">Nested</Link>
      <hr/>
    </div>
  )
}

export default Header;
