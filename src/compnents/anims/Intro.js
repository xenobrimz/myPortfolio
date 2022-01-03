import React from "react";
import {Controller, Scene} from 'react-scrollmagic'
import { Tween, Timeline } from "react-gsap";
import About from '../About';

const Intro = props =>{
    return(
        <Controller>
          <Scene
            triggerHook="onLeave"
            duration="250%"
            pin
          >
            <Timeline
              wrapper={<div className='container-fluid vh-100 p-0 m-0 text-center' />}
            >
                <section className=" container-fluid bg-dark text-light vh-100 position-absolute d-flex flex-column justify-content-center"><h1>Hello</h1></section>
                <Tween
                    from={{ x: '-100%' }}
                    to={{ x: '0%' }}
                >
                    <section className="container-fluid bg-primary vh-100 position-absolute d-flex flex-column justify-content-center"><h1>I'm Bobby Jackson</h1></section>
                </Tween>
                <Tween
                    from={{ x: '100%' }}
                    to={{ x: '0%' }}
                >
                    <section className="container-fluid bg-danger vh-100 position-absolute d-flex flex-column justify-content-center"><h1>Full-stack developer for hire!</h1></section>
                </Tween>
                <Tween
                    from={{ y: '100%' }}
                    to={{ y: '0%' }}
                  >
                    <section className="container-fluid bg-danger m-0 p-0 vh-100 position-absolute d-flex flex-column justify-content-center"><About/></section> 
                </Tween>
            </Timeline>
          </Scene>
        </Controller>
    );
}

export default Intro;