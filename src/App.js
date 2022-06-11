import React, { useState, useEffect } from "react";
import LoadingQuotes from "./LoadingQuotes";
import RandomQuote from "./RandomQuote";
import FooterPart from "./FooterPart";

const QUOTE_API = "https://type.fit/api/quotes";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    fetch(QUOTE_API)
      .then((response) => response.json())
      .then((data) => setAllQuotes(data));
  }, []);

  const handleNewQuote = () => {
    setRandNumber(Math.floor(Math.random() * allQuotes.length));
  };

  return (
    <>
      <div className="App">
        {allQuotes.length ? (
          <RandomQuote
            allQuotes={allQuotes}
            handleNewQuote={handleNewQuote}
            randNumber={randNumber}
          />
        ) : (
          <LoadingQuotes />
        )}
      </div>
      <FooterPart />
    </>
  );
}

export default App;
