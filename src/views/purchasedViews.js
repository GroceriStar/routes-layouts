import React from 'react';


// it's a view, related to display list of links to viewing ingredients.
// in this view is important to get grocery id and user id for logged in cases as well.
const PurchasedListView = ({ match }) => {

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


const PurchasedItemView = ({ match }) => {

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



// -----------------------------

export {
  PurchasedListView,
  PurchasedItemView
}
