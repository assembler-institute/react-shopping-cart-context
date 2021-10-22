import { useEffect } from "react";
import { Redirect } from "react-router";
import { useState } from "react/cjs/react.development";
import PurchaseCompletedImage from "../../img/purchase-complete1_orig.png";
import IconImg from "../IconImg/IconImg";


const cardProviders = [
    { value: "PurchaseCompleted", img: PurchaseCompletedImage, disabled: false, checked: false },
];



function PurchaseCompleted() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRedirect(true), 1000)
        return clearTimeout(timer);
    }, [])

    return (

        <div>
            {redirect && <Redirect to={`/`} />}
            <h2>Thank you for your purchase! 谢谢！</h2>
            <IconImg src={PurchaseCompletedImage} height={20} width={35} />
        </div>
    );
}

export default PurchaseCompleted;