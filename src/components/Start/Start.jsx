import { Link } from 'react-router-dom';
//import { Header } from '../';
const Start = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="start-container">
                <div className="start-background">
                    <Link className="start-button" to="/game">
                        Start
                        <img src="Play logo" alt=">" loading="lazy" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Start;
