interface MiButtonProps {
    variant?: "primary" | "secondary" | "outline" | "danger"
    size?: "sm" | "md" | "lg"
    disabled?: boolean;
    loading?: boolean;
    click: () => void;
    text?:string;
}

export const Buttonnn = ({ variant = "primary", size = "md", disabled = false, loading = false, click, text }: MiButtonProps) => {

    const variantColors = {
        primary: "components__button--primary",
        secondary: "components__button--secondary",
        outline: "components__button--outline",
        danger: "components__button--danger",
    };

    const sizes = {
        sm:"components_size--sm",
        md:"components_size--md",
        lg:"components_size--lg",
    }

    return (
        <button onClick={click}
            className={`components__button ${variantColors[variant]} ${sizes[size]} ${disabled ? "components__button--disabled" : ""}`}
            disabled={disabled }>
             {loading ? "Cargando...":text}
        </button>
    )
}

        
             
           
        
    


