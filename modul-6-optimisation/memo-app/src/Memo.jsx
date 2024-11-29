import { useState, useEffect, useMemo } from "react";

const Discount = ({ order }) => {
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    console.log("Discount rerenders");
    if (order.clientType === "external") {
      if (order.isTotalMoreThan100) {
        setDiscount(10);
      } else {
        setDiscount(0);
      }
    } else {
      if (order.isTotalMoreThan100) {
        setDiscount(20);
      } else {
        setDiscount(10);
      }
    }
  }, [order]);

  return <h3>Discount: {discount}%</h3>;
};

export const Memo = () => {
  const [clientType, setClientType] = useState("external");
  const [totalValue, setTotalValue] = useState(100);

  const isTotalMoreThan100 = totalValue > 100;

  const memoOrder = useMemo(
    () => ({
      clientType,
      isTotalMoreThan100,
    }),
    [clientType, isTotalMoreThan100]
  );

  return (
    <>
      <h1>Memo - shopping cart</h1>
      <form>
        <input
          type="radio"
          id="external"
          name="client"
          value="external"
          checked={clientType === "external"}
          onChange={(e) => {
            setClientType(e.currentTarget.value);
          }}
        />
        <label htmlFor="external">external</label>
        <input
          type="radio"
          id="internal"
          name="client"
          value="internal"
          checked={clientType === "internal"}
          onChange={(e) => {
            setClientType(e.currentTarget.value);
          }}
        />
        <label htmlFor="internal">internal</label>

        <div>
          <label htmlFor="total">Total</label>
          <input
            type="number"
            id="total"
            name="total"
            value={totalValue}
            onChange={(e) => {
              setTotalValue(Number(e.target.value));
            }}
          />
        </div>
      </form>
      <Discount order={memoOrder} />
    </>
  );
};
