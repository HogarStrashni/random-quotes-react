import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const RandomQuote = ({ allQuotes, handleNewQuote, randNumber }) => {
  const len = allQuotes.length;
  const quote = allQuotes[randNumber];

  return (
    <div>
      <p className="quote-No">#{randNumber}</p>
      <div className="icon">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <h1 className="quote">{len && quote.text}</h1>
      <div className="icon">
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <h2 className="author">* {len && (quote.author || "unknown author")}</h2>
      <div className="button-ord">
        <button className="button" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
