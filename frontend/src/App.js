import CardPayment from "./components/CardPayment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51IrPtzJX3UKdjATFbIhErfo3hi3W6AwWxgNOxbiPSGJN2N4AanlOAypW8NXRwHs61JG83NxqbdjnpVFDcUJkm4Tw00idBYCdbk"
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
