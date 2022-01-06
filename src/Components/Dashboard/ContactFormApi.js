import React from 'react'
import logo from './../../Assets/Images/logo.jpeg';

class ContactFormApi extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://salesutilityc.herokuapp.com/api/contact-show")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }





    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;


        return (
            <>
                <header>

                    <div className='row p-0'>
                        <div className='col-md-12 col-lg-12'>
                            <div className='container-fluid bg-primary m-0 p-0 d-flex justify-content-start align-items-center'>
                                <div>
                                    <img src={logo} alt="Logo" className='img-fluid' />
                                </div>
                                <div className='mx-auto align-self-center'>
                                    <p className='text-light m-0 p-0'>List of Contact Forms</p>
                                </div>



                            </div>

                        </div>

                    </div>


                </header>


                <main>
                    <div className='bg-danger'>
                        <div className="">
                            <h1> Fetch data from an api in react </h1>  {
                                items.map((item) => (
                                    <ol key={item.id} >
                                        full_name: {item.full_name},
                                        company_name:{item.company_name},
                                        email:{item.email},
                                        subject:{item.subject},
                                        messages:{item.messages},
                                        add_company:{item.add_company},
                                        createdAt:{item.createdAt},
                                        updatedAt:{item.updatedAt}



                                    </ol>
                                ))
                            }
                        </div>


                    </div>

                </main>


            </>
        )
    }
}

export default ContactFormApi;