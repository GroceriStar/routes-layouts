import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sep = () => <span>  |  </span>;


const Header = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/3">view grocery</Link> <Sep />
      <Link to="/design/grocery/3">designed grocery page</Link> <Sep />
      <Link to="/groceries">all groceries</Link>  <Sep />
      <Link to="/manage/grocery/3">manage grocery</Link> <Sep />


      <Sep />


      <Link to="/full/grocery/3">FULL grocery</Link> <Sep />
      <Link to="/print/grocery/3">Print grocery</Link> <Sep />
      <Link to="/clone/grocery/3">Clone grocery</Link> <Sep />

      <hr/>



    </Fragment>
  )
}


//
// const HeaderIngredient = () => {
//   return (
//     <div>
//       <Link to="/">Home</Link> <Sep />
//       <Link to="/grocery/:id">Catalog</Link> <Sep />
//       <Link to="/design/grocery/:id">Another</Link> <Sep />
//       <Link to="/groceries">Nested</Link>
//       <Link to="/manage/grocery/:id">Nested</Link>
//       <hr/>
//     </div>
//   )
// };



 const HeaderShoplist = () => {
  return (
    <div>
      <Link to='/shopping/:groceryId/:departmentId'>Shopping</Link> <Sep />

      <Link to='/shopping/edit/:groceryId/:departmentId'>Shopping</Link> <Sep />
      <Link to='/shopping/preview/:groceryId/:departmentId'>Shopping</Link> <Sep />

      <Link to='/changename'>Shopping</Link> <Sep />
      <Link to='/view/groceries'>Shopping</Link> <Sep />
      <Link to='/changedepartmentid/:id/:departmentId'>Shopping</Link>
      <Link to='/add/ing/:id/:groceryId'>Shopping</Link>
      <Link to='/togglepurchased'>Shopping</Link>
      <Link to='/clearpurchased'>Shopping</Link>
      <Link to='/unattach'>Shopping</Link>
      <hr/>
    </div>
  )
};


const HeaderPurchased = () => (

  <div>
    <Link to="/purchased/3">Purchased in Grocery</Link> <Sep />
    <Link to="/purchased/3/10">Purchased in department or view of item details</Link> <Sep />
    <Link to="/all/purchased">List of purchases</Link> <Sep />
    <Link to="/manage/purchased/3">Manage purchased grocery list</Link>
    <Link to="/manage/purchased/3/20181025">Manage purchased at some day???</Link>
    <hr/>
  </div>

)



export default Header;
