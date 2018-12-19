import React, { Component, Fragment } from 'react';
import {
  Link, Route
} from 'react-router-dom';


// it's a view, related to display list of links to viewing ingredients.
const DepartmentsView = ({ routes }) => {

  // console.log(match);
  return (
    <div>
      DepartmentsView

    </div>
  )
}

const DepartmentView = ({ routes }) => {

  // console.log(match);
  return (
    <div>
      DepartmentView

    </div>
  )
}


// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)


// here we'll display list of groceries
// const GroceriesView = ({ match }) => {
//
//   console.log(match);
//   console.log(match.params);
//   const items = [
//     { id: 1, name: 'GL1', slug: 'first' },
//     { id: 2, name: 'GL2', slug: 'second' },
//     { id: 3, name: 'GL3', slug: 'third' },
//   ]
//   return (
//     <div>
//       GroceriesView - {match.url}
//
//       <hr />
//       <ul>
//         {items.map(({ name, id, slug }) => (
//           <li key={name}>
//             <Link to={`${match.url}/${id}`}>{name} - {slug}</Link>
//           </li>
//         ))}
//       </ul>
//       <hr />
//
//
//     </div>
//   )
// }

// const GroceryView = ({ match }) => {
//
//   console.log(match);
//   console.log(match.params);
//   return (
//     <div>
//       GroceryView - {match.url}
//     </div>
//   )
// }

const ManageDepartmentsView = ({ match }) => {

  console.log(match);
  console.log(match.params);
  return (
    <div>
      GroceryView - {match.url}
    </div>
  )
}

const ManageDepartmentView = ({ match }) => {

  console.log(match);
  console.log(match.params);
  return (
    <div>
      GroceryView - {match.url}
    </div>
  )
}

// const DesignedGroceryView = ({ match }) => {
//
//   console.log(match);
//   console.log(match.params);
//   return (
//     <div>
//     DesignedGroceryView - {match.url}
//     </div>
//   )
// }

export {
  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
}
