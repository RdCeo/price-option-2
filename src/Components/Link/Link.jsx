import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="mr-10 p-6
         hover:bg-yellow-500">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.prototype = {
    route: PropTypes.object
}

export default Link;