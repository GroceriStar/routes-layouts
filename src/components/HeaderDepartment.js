import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


//@TODO replace with NavLink
const HeaderDepartment = () => {
  return (
    <ul>
      <li>
        <Link to={{ pathname: "/departments/5" }}>
           view departments
         </Link>
       </li>
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
      </li>
      <li>
        <Link to={{ pathname: "/department/3/1/all" }}>
          1STATUS: ALL
        </Link>
      </li>
      <li>
        <Link to={{ pathname: "/department/3/1/purchased" }}>
          1Status: purchased
        </Link>
      </li>
      <li>
        <Link to={{ pathname: "/department/3/1/the-third-key" }}>
          1STATUS: THIRD=item
        </Link>
     </li>
    </ul>
  )
};

export default HeaderDepartment;
