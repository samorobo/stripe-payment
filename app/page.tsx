

// import CheckoutPage from "@/app/components/CheckOutPage";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import convertToSubcurrency from "@/app/lib/convertToSubcurrency";
import Hero from "./components/Hero";
import Newest from "@/app/components/Newest";
import TrainingPay from "./components/TrainingPay";

// if (process.env.NEXT_PUBLIC_STRIPE_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
// }
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Home() {
  //const amount = 49.99;

  return (
    <div>
            <Hero />
              <Newest /> 
            
             
    {/* <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main> */}
    </div>
  );
}