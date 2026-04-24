"use client"
import { useRouter,redirect } from "next/navigation";

export default function PlaceOrder(){
    const router = useRouter();

    const handlePlaceOrder = () => {
        router.push('order-confirmation');
        //router.replace('order-confirmation');
        //redirect('/');
    }

    return(
        <>
            <h1>Place your orders here</h1>
            <button onClick={handlePlaceOrder}>Place order</button>
        </>
    )
}