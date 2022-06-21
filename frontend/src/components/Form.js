import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function Form() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        comment: "",
        projectAddress: "",
    })

    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        // console.log(e.target)
        // console.log(form)
    }


    //onSubmit redirect to a new page
    //use history.push. import from react-router-dom
    const history = useNavigate();


    //"send" method using fetch
    const sendEmail = (e) => {

        e.preventDefault();

        const data = {
            service_id: 'service_z3p8h0m',
            template_id: 'template_svmf3nm',
            user_id: 'user_7Pf1rN0FgZQwrrMpFSw55',
            template_params: form
        };


        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })

            .then((result) => {
                console.log(result.statusText);
            }, (error) => {
                console.log(error.statusText);
            });

        e.target.reset();

        history.push("/portfolio")     //onSubmit redirect to a new page
    }



    return (
        <div className="form-box">


            <form onSubmit={sendEmail}>

                 
                    <div className="field1">

                        <input
                            type="text"
                            className="form-input"
                            name="name"
                            placeholder="Name"
                            onChange={updateForm}
                            value={form.name}
                        />


                        <input
                            type="tel"
                            className="form-input"
                            name="phone"
                            placeholder="Phone 000-000-0000"
                            onChange={updateForm}
                            value={form.phone}
                        />

                        <input
                            type="email"
                            className="form-input"
                            name="email"
                            placeholder="E-mail *"
                            onChange={updateForm}
                            value={form.email}
                        />

                        <textarea
                            type="text"
                            className="form-input"
                            name="comment"
                            placeholder="Comment *"
                            onChange={updateForm}
                            value={form.comment}
                        />

                    </div>

                    <button
                        type="submit"
                        id="submitBtn"
                        className="submitBtn"
                    > submit</button>

            </form>
            {/* end of form */}


        </div>
        // end of form-box
    )
}