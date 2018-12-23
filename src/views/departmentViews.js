import React from 'react';
// import {
//   Link, Route
// } from 'react-router-dom';


// it's a view, related to display list of links to viewing ingredients.
// in this view is important to get grocery id and user id for logged in cases as well.
const DepartmentsView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);



  return (
    <div>
      DepartmentsView - {match.url}

    </div>
  )
}


const DepartmentView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      DepartmentView - {match.url}

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

// -----------------------------


// https://github.com/GroceriStar/groceristar/blob/master/server/controllers/department-controller.js


// const DepartmentByGroceryList  = ({ match }) => (
//   <div>
//     DepartmentByGroceryList
//   </div>
// )
//
// const DataByDepartment  = ({ match }) => (
//   <div>
//     DataByDepartment - we got an id
//   </div>
// )
//
// const HideDepartment  = ({ match }) => (
//   <div>
//     HideDepartment - we got an id
//   </div>
// )
//
// const RemoveDepartment  = ({ match }) => (
//   <div>
//   RemoveDepartment - we got an id
//   </div>
// )
//
//
// const ShowAllDepartment  = ({ match }) => (
//   <div>
//   ShowAllDepartment - we got an id
//   </div>
// )
//
//
// const ToggleStatus   = ({ match }) => (
//   <div>
// ToggleStatus - we got an id </div>
// )
//
//
// const UnhideDepartment  = ({ match }) => (
//   <div>
//   UnhideDepartment - we got an id
//   </div>
// )

// -----------------------------

export {
  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
}
