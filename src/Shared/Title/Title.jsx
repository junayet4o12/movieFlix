/* eslint-disable react/prop-types */
const Title = ({title1, title2}) => {
    return (
        <h2 className="text-4xl font-bold text-white text-center"><span>{title1}</span> <span className="text-secondary">{title2}</span></h2>
    );
};

export default Title;