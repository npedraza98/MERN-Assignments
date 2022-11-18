import { useParams } from "react-router-dom";

const Text = (props) => {
    const {text, color, bgColor} = useParams();

    return (
        <div>
            {
                isNaN(text)?
                <p style={color?{color: color, backgroundColor: bgColor}:null}>This is a word: {text}</p>
                :
                <p>This is a number: {text}</p>
            }
        </div>
    )
}

export default Text;