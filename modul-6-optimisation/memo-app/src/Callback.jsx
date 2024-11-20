import { useState, useEffect } from "react";

const Points = ({ calculateRisk, days }) => {
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    console.log("Risk rerenders");

    switch (calculateRisk()) {
      case "low":
        setMultiplier(1);
        break;
      case "mid":
        setMultiplier(2);
        break;
      case "high":
        setMultiplier(3);
        break;
    }
  }, [calculateRisk]);

  return <h3>Points: {days * multiplier}</h3>;
};

export const Callback = () => {
  const [likelihood, setLikelihood] = useState("low");
  const [impact, setImpact] = useState("low");
  const [days, setDays] = useState(1);

  const calculateRisk = () => {
    if (likelihood === "high" && impact === "high") {
      return "high";
    } else if (likelihood === "low" || impact === "low") {
      return "low";
    } else if (likelihood === "mid" || impact === "mid") {
      return "mid";
    }
  };

  return (
    <>
      <h1>Callback</h1>
      <div>
        <h3>days</h3>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </div>
      <div>
        <h3>risk likelihood {likelihood}</h3>
        <button onClick={() => setLikelihood("low")}>low</button>
        <button onClick={() => setLikelihood("mid")}>mid</button>
        <button onClick={() => setLikelihood("high")}>high</button>
      </div>
      <div>
        <h3>risk impact {impact}</h3>
        <button onClick={() => setImpact("low")}>low</button>
        <button onClick={() => setImpact("mid")}>mid</button>
        <button onClick={() => setImpact("high")}>high</button>
      </div>
      <Points calculateRisk={calculateRisk} days={days} />
    </>
  );
};
