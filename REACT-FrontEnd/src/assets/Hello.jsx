
const Hello = ({ name, surname, message }) => {
    console.log({ name, surname, message });
    return (
        <div>
            <h1>
                {message} {name} {surname}
            </h1>
        </div>
    );
};

import  PropTypes from 'prop-types';

Hello.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
};

export default Hello;