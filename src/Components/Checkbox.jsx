import React, { Fragment } from "react";

const Checkbox = props => {
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
    <Fragment>
        <label className=" ">
            <input className="" 
            name={id} 
            type="checkbox"
            defaultChecked={done}
            onChange={onChange}/>
            <div className=" ">
                {description}
            </div>
        </label>
    </Fragment>
  )
}

export default Checkbox