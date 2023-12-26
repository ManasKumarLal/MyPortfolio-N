import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollWrapper = ({ children }) => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#scroll-container'),
            smooth: true,
            offset: ['10%', 0], // Adjust the offset as needed
            reloadOnContextChange: true,
            // Add other configuration options as needed
        });

        // Clean up the Locomotive Scroll instance on component unmount
        return () => {
            scroll.destroy();
        };
    }, []);

    return <div id="scroll-container">{children}</div>;
};

export default LocomotiveScrollWrapper;
