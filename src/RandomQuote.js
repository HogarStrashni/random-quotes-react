import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const RandomQuote = ({ allQuotes, handleNewQuote, randNumber }) => {
  const len = allQuotes.length;
  const quote = allQuotes[randNumber];

  return (
    <div>
      <p className="text-end">#{randNumber}</p>
      <div className="flex justify-center text-2xl py-4">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <h1 className="text-center text-3xl">{len && quote.text}</h1>
      <div className="flex justify-center text-2xl py-4">
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <h2 className="text-end text-2xl">
        * {len && (quote.author || "unknown author")}
      </h2>
      <div className="flex justify-center text-2xl">
        <button
          className="bg-indigo-700 text-slate-200 mt-10 w-44 h-12 rounded-md"
          onClick={handleNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
