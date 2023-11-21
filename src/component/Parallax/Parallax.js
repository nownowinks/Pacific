import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './TextBlock';
import Section2 from '../Section2';
import RightText from '../RightText';
import Title from '../Title';
import Section8 from '../Section8';
import RightText2 from '../RightText2';
import TitleContainer from '../utility/TitleContainer';
import RightText3 from '../RightText3';
import RightText4 from '../RightText4';
import Section3 from '../Section3';
import Gradient from '../Gradient';
import Section4 from '../Section4';
import Footer from '../Footer';
import Navbar from '../Navbar';
// import Pagesanimation from '../Pagesanimation'



const Parallaxcomp = () => {
    
    const countries = [
        "https://imgs.search.brave.com/WRAfSoHc_cmCxLSOWsHatdN_b6fQwD8FwcgdiCpJYBc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTU1OTg1NjUy/MVVuaXRlZC1TdGF0/ZXMtb2YtQW1lcmlj/YS1MYXJnZS1GbGFn/LnBuZw",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png",
        "https://imgs.search.brave.com/WRAfSoHc_cmCxLSOWsHatdN_b6fQwD8FwcgdiCpJYBc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTU1OTg1NjUy/MVVuaXRlZC1TdGF0/ZXMtb2YtQW1lcmlj/YS1MYXJnZS1GbGFn/LnBuZw",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
      ];
      const courses = [
        "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
        "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
        "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
        "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
      ];
    
    return (
        <div className='parallax-main'>
            <Parallax pages={9} style={{ height: '100vh' }} className='animation'>
                <ParallaxLayer offset={0} speed={0.25}>
                    <Navbar/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.25}>
                    <div className='animation_layer parallax' id='artback'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <div className='animation_layer parallax' id='mountain'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.1}>
                    <div className='animation_layer parallax' id='logoland'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <div className='animation_layer parallax' id='jungle1'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.35}>
                    <div className='animation_layer parallax' id='jungle2'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className='animation_layer parallax' id='jungle3'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.45}>
                    <div className='animation_layer parallax' id='jungle4'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.40}>
                    <div className='animation_layer parallax' id='manonmountain'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.35}>
                    <div className='animation_layer parallax' id='jungle5'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.25}>
                    <Section2 />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.25}>
                    <RightText />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.25}>
                    <Title />
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.25}>
                    <Section8 />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={0.25}>
                    <RightText2 />
                </ParallaxLayer>
                {/* <ParallaxLayer offset={1} speed={0.25}>
                    <TitleContainer heading={"Value Added Services"}
                        subHeading={
                            "Make your study abroad journey hassle-free with our range of services."
                        } />
                </ParallaxLayer> */}
                <ParallaxLayer offset={6} speed={0.25}>
                    <RightText3/>
                </ParallaxLayer>
                <ParallaxLayer offset={7} speed={0.25}>
                    <RightText4/>
                </ParallaxLayer>
                {/* <ParallaxLayer offset={8} speed={0.25}>
                    <Section3 courses={courses} />
                </ParallaxLayer> */}
                {/* <ParallaxLayer offset={9} speed={0.25}>
                    <Pagesanimation/>
                </ParallaxLayer> */}
                {/* <ParallaxLayer offset={11} speed={0.25}>
                    <Section4/>
                </ParallaxLayer> */}
                {/* <ParallaxLayer offset={12} speed={0.25}>
                    <Footer/>
                </ParallaxLayer> */}
            </Parallax>
        </div>
    )
}

export default Parallaxcomp
