import "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ onClick, type, children }) => {
    return (
        <button
            className="button"
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
};

export default Button