import { Link } from "react-router-dom"

const Button = ({ to, text, isPrivate }) => {
    
    const customStyle = isPrivate ? "px-4 py-2 border rounded-md hover:border-gray-400 transition duration-300 cursor-not-allowed" : 'px-4 py-2 border rounded-md hover:border-purple-400 transition duration-300';

    return (
        <Link to={to} target="_blank" className={customStyle} >
            {isPrivate ? "Private" : text}
        </Link>
    )
}

export default Button;