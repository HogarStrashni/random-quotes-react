import React, { useState } from "react";

const initialTime = new Date().toLocaleTimeString("en-GB");

const FooterPart = () => {
  const [time, setTime] = useState(initialTime);
  setInterval(() => {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }, 1000);

  return (
    <div>
      <h3 className="time-clock">{time}</h3>
    </div>
  );
};

export default FooterPart;
