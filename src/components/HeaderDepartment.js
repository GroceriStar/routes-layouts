import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeaderDepartment = () => {
  return (
    <ul>
      <li>
        <Link to={{ pathname: "/department/10/5" }}>
           view department
         </Link>
       </li>
       <li>
         <Link to={{ pathname: "/department/3/1", search: "?status=all" }}>
           STATUS: ALL
         </Link>
       </li>
       <li>
         <Link to={{ pathname: "/department/3/1", search: "?status=purchased" }}>
           Status: purchased
         </Link>
       </li>
       <li>
         <Link to={{ pathname: "/department/3/1", search: "?status=the-third-key" }}>
           STATUS: THIRD=item
         </Link>


      <hr/>
    </ul>
  )
};

export default HeaderDepartment;
