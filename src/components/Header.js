import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Sep = () => <span>  |  </span>;

// export const Header = () => {
//   return (
//     <div>
//       <Link to="/">Home</Link> <Sep />
//       <Link to="/grocery/:id">Catalog</Link> <Sep />
//       <Link to="/design/grocery/:id">Another</Link> <Sep />
//       <Link to="/groceries">Nested</Link>  <Sep />
//       <Link to="/manage/grocery/:id">Nested</Link>
//       <hr/>
//     </div>
//   )
// }
const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/3">view grocery</Link> <Sep />
      <Link to="/design/grocery/3">designed grocery page</Link> <Sep />
      <Link to="/groceries">all groceries</Link>  <Sep />
      <Link to="/manage/grocery/3">manage grocery</Link> <Sep />


      <Sep />
      <Sep />
      <Sep />
            <Link to="/grocery/3/full">FULL grocery</Link> <Sep />
            <Link to="/grocery/3/print">Print grocery</Link> <Sep />
            <Link to="/grocery/3/clone">Clone grocery</Link> <Sep />

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
