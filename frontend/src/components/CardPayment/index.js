import React from "react";
import styled from "styled-components";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

function CardPayment() {
  const stripe = useStripe();
  const element = useElements();

  const paymentSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      axios({
        url: "http://localhost:5000/payment/card",
        method: "POST",
        data: {
          id: paymentMethod.id,
          description: "Zapatos Lebron prueba",
          amount: 50 * 100,
        },
      });
    }
  };
  return (
    <div>
      <StyleCard>
        <div className="center-card">
          <form onSubmit={(e) => paymentSubmit(e)}>
            <div className="card">
              <img
                src="https://i1.wp.com/s-portology.com/wp-content/uploads/2019/09/nike-lebron-soldier-13-triple-black-ar4225-005-1.jpg?fit=1140%2C800&ssl=1"
                alt=""
                className="img-card"
              />
              <h3> LeBron Soldier 14</h3>
              <p>$50 USD</p>
              <br />
              <div className="margin-card">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
              <button className="btn-payment" type="submit">
                Comprar
              </button>
            </div>
          </form>
        </div>
      </StyleCard>
    </div>
  );
}

export default CardPayment;

const StyleCard = styled.div`
  .center-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    text-align: center;
  }
  .card {
    width: 450px;
    height: 450px;
    -webkit-box-shadow: 3px 1px 15px 5px rgba(0, 0, 0, 0.12);
    box-shadow: 3px 1px 15px 5px rgba(0, 0, 0, 0.12);
  }
  .img-card {
    width: 100%;
    height: 250px;
  }
  .btn-payment {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 90%;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    /* BORDER RADIUS */
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.3s;
  }
  .btn-payment:hover {
    transition: 0.3s;
    background: #faa307;
    color: white;
  }
  .margin-card {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
