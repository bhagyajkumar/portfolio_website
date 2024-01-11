import PropTypes from 'prop-types';

function ThemeWrapper({children}) {
    return (
        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 min-h-screen">
                {children}
        </div>
    );
}

ThemeWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default ThemeWrapper;
