import './style.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function AcceptConditions() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    console.log(searchParams.toString());
    console.log(searchParams.get('hola'));

    const userAcceptedConditions = () => {
        localStorage.setItem('over18', true);
        navigate(searchParams.get('redirect') ?? '/');
    }

    return(
        <main className="main-home">
            <div >
                <h2 className="warning">ADULTS ONLY! You need to be +18</h2>
            </div>
            <button onClick={userAcceptedConditions} className="accept">I'm +18</button>
        </main>
    )
}

export default AcceptConditions;