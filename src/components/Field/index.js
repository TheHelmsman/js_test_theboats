import React, {Fragment} from 'react';

export const myInput = (props) => {
  const {input, type, placeholder, meta }=props;
  return (
    <Fragment>
      <input className="TextInput" {...input} type={type} placeholder={placeholder} />
      { meta.error &&
        meta.touched &&
        <div>
          {meta.error}
        </div>}
    </Fragment>
  );
};
