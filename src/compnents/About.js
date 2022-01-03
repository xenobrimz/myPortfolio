import React from "react";
import ScrollReveal from "scrollreveal";

const About = props =>{
    ScrollReveal().reveal('#bio',{
        reset: 'true'
    })
    return(
        <>
        <h1 className='bg-light text-center m-0 p-0'>About</h1>
        <div className='container-fluid bg-dark vh-100 d-flex flex-column justify-content-center'> 
            <div className='container d-flex flex-column justify-content-start w-50 h-25 bg-light rounded-3 h-75 p-0'>
            <h2 className='text-start justify-self-start p-5'>Hi,</h2>
                <div className="h-25"></div>
                <div className='container-fluid mt-0'>
                    <h5 className=' text-center' id=''> I am a young programmer and coding dojo, triple red belt, graduate thats ready to be a valued newcomer to any team.</h5>
                </div>
            </div>
        </div>
        </>
    );
}

export default  About;