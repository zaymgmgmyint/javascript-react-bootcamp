`use client`
export default function CustomButton({onClick, label}) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}