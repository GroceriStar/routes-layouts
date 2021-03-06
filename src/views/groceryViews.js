import React from 'react';
import {
  Link
} from 'react-router-dom';


import HeaderDepartment from '../components/HeaderDepartment'




// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)


// here we'll display list of groceries
const GroceriesView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  const items = [
    { id: 1, name: 'GL1', slug: 'first' },
    { id: 2, name: 'GL2', slug: 'second' },
    { id: 3, name: 'GL3', slug: 'third' },
  ]
  return (
    <div>
      GroceriesView - {match.url}

      <hr />
      <ul>
        {items.map(({ name, id, slug }) => (
          <li key={name}>
            <Link to={`${match.url}/${id}`}>{name} - {slug}</Link>
          </li>
        ))}
      </ul>
      <hr />


    </div>
  )
}

const GroceryView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  console.log(match.params.status);

  // we should have

 // full
  // if( status == 'full' )
  // if( status == 'print' )
  // if( status == 'clone' )
 // print
 // clone


  return (
    <div>
      GroceryView - {match.url}



      <HeaderDepartment />
    </div>
  )
}

const ManageGroceryView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  return (
    <div>
      GroceryView - {match.url}
    </div>
  )
}

const DesignedGroceryView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  return (
    <div>
    DesignedGroceryView - {match.url}
    </div>
  )
}

const CloneGroceryView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  return (
    <div>
      CloneGroceryView - {match.url}
    </div>
  )
}



const PrintGroceryView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  return (
    <div>
      PrintGroceryView - {match.url}
    </div>
  )
}


const FullGroceryView = ({ match }) => {

  console.log(match);
  console.log(match.params);

  return (
    <div>
      FullGroceryView - {match.url}
    </div>
  )
}


// --------------------------------


// const ChangeGroceryNameView = ({ match }) => {
//   return (
//     <div>
//     ChangeGroceryNameView - we got an id {match.url}
//       <hr/>
//     </div>
//   )
// }
//
// const CloneGroceryView  = ({ match }) => {
//   return (
//     <div>
//     CloneGroceryView  we got an id {match.url}
//       <hr/>
//     </div>
//   )
// }
//
// const CreateGroceryView  = ({ match }) => {
//   return (
//     <div>
//     CreateGroceryView
//       <hr/>
//     </div>
//   )
// }




// ----------------------------------


export {
  HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView,


  PrintGroceryView,
  FullGroceryView,
  CloneGroceryView
}
