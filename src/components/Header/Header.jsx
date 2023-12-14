import { useEffect, useState } from 'react';

const Header = () => {
    const [backgroundHeight, setBackgroundHeight] = useState(0);

    useEffect(() => {
        const calculateHeight = () => {
            const windowHeight = window.innerHeight;
            const headerHeight = 600;

            const calculatedHeight =
                Math.max(windowHeight - headerHeight, 0) / 2;

            setBackgroundHeight(calculatedHeight);
        };

        calculateHeight();

        window.addEventListener('resize', calculateHeight);

        return () => {
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);

    console.log(`${backgroundHeight} px`);

    return <div className="image-top" style={{ height:`${backgroundHeight} px`}}></div>;
};

export default Header;