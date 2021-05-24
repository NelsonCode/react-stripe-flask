import CardPayment from "./components/CardPayment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const stripePromise = loadStripe(
    ""
  );
  return (
    <div>
      <h1>Hola</h1>
      <Elements stripe={stripePromise}>
        <CardPayment />
      </Elements>
    </div>
  );
}

export default App;
