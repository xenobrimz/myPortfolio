import React from "react";

const Portfolio = props =>{
    return(
        <>
            <h1 className='bg-light text-center'>Portfolio</h1>
            <div className='container-fluid bg-primary vh-100 d-flex flex-column justify-content-center'>
                <div className='container-fluid bg-light h-50 w-75 d-flex p-5  justify-content-center rounded-3'>
                    <div className='bg-primary h-25 w-25 m-2  text-center rounded-3 '>
                        <h5>Social Buzz</h5>
                    </div>
                    <div className='bg-primary h-25 w-25 m-2 text-center rounded-3'>
                        <h5>goodfellas barber college</h5>
                    </div>
                    <div className='bg-primary h-25 w-25 m-2  text-center rounded-3'>
                        <h5>google recreation</h5>
                    </div>
                </div>
            </div>
        </>
      
    );
}

export default Portfolio;