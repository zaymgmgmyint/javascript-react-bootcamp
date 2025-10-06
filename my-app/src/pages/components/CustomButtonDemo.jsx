`use client`
import CustomButton from "./CustomButton";

export default function CustomButtonDemo() {

    const onClickHandler = () => {
        console.log("Button clicked");
    }

    return (
        <CustomButton label={"Click Me"} onClick={onClickHandler}></CustomButton>
    )
}