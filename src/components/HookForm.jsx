import React, { useState } from 'react';

const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const onChangeHandler = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(formState);
    }
    // const User = formState;
    return(
    <div>
        <div>
            <form onSubmit={onSubmitHandler}>
                <label className="col-2">First Name  </label>
                <input className="col-2" type="text" name="firstName" onChange={onChangeHandler} />
                <br/>
                <label className="col-2">Last Name  </label>
                <input className="col-2" type="text" name="lastName" onChange={onChangeHandler} />
                <br/>
                <label className="col-2">Email  </label>
                <input className="col-2" type="email" name="email" onChange={onChangeHandler} />
                <br/>
                <label className="col-2">Password  </label>
                <input className="col-2" type="password" name="password" onChange={onChangeHandler} />
                <br/>
                <label className="col-2">Confirm Password  </label>
                <input className="col-2" type="password" name="confirmPassword" onChange={onChangeHandler} />
                <br/>
            </form>
        </div>
        <div className="mt-30">
            <h4 >Your Form Data</h4>
            <label className="col-2">First Name:  </label>
            <props className="col-2 text-info">{formState.firstName}</props>
            <br/>
            <label className="col-2">Last Name:  </label>
            <props className="col-2 text-info">{formState.lastName}</props>
            <br/>
            <label className="col-2">Email:  </label>
            <props className="col-2 text-info">{formState.email}</props>
            <br/>
            <label className="col-2">Password:  </label>
            <props className="col-2 text-info">{formState.password}</props>
            <br/>
            <label className="col-2">Confrom Password:  </label>
            <props className="col-2 text-info">{formState.confirmPassword}</props>
            <br/>
        </div>
    </div>
    )
}

export default RegisterForm; 