import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();

        return (
            <Component
                navigate={navigate}
                location={location}
                params={params}
                {...props}
            />
        );
    };

    return Wrapper;
};