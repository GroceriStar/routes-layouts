import React from 'react';


// it's a view, related to display list of links to viewing ingredients.
// in this view is important to get grocery id and user id for logged in cases as well.
const ShoppingView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);



  return (
    <div>
      ShoppingView - {match.url}

    </div>
  )
}




const ChangeNameView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      ChangeNameView - {match.url}

    </div>
  )
}
const GroceriesAllView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      GroceriesAllView - {match.url}

    </div>
  )
}
const ChangeDepIdView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      ChangeDepIdView - {match.url}

    </div>
  )
}
const AddIngredientView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      AddIngredientView - {match.url}

    </div>
  )
}
const TogglePurchasedView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      TogglePurchasedView - {match.url}

    </div>
  )
}
const ClearPurchasedView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      ClearPurchasedView - {match.url}

    </div>
  )
}
const UnnatachView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      UnnatachView - {match.url}

    </div>
  )
}
const EditShoppingView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      EditShoppingView - {match.url}

    </div>
  )
}
const PreviewShoppingView = ({ match }) => {

  // console.log(match);
  console.log(match);
  console.log(match.params);

  console.log(match.params.status);
  return (
    <div>
      PreviewShoppingView - {match.url}

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
  ShoppingView,
  ChangeNameView,
  GroceriesAllView,
  ChangeDepIdView,
  AddIngredientView,
  TogglePurchasedView,
  ClearPurchasedView,
  UnnatachView,

  EditShoppingView,
  PreviewShoppingView,
}
