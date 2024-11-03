
const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <h2 className="text-3xl mb-2">{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};



export default Heading;