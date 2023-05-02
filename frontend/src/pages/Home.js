import React from "react";
const Home = () => {
  return (
    <div
    
    style = {{backgroundColor: 'white', height:"100vh"}}>
    <>
      <header>
        <h1>Home</h1>
      </header>
      <h2>
        Project Introduction
      </h2>
      <p>
        
      </p>
      <p>
      An emerging asset class, the recent surge of popularity in crypto markets has
       made cryptocurrencies an essential part of investment portfolios for retail 
       and institutional investors. As prices for cryptocurrencies continue to break 
       previous highs, the race is on for investors to develop a trading strategy that
       can take advantage of the high volatility and fluctuation that exists in the
        crypto markets. The pairs trading strategy is an example of a market-neutral
         strategy that attempts to take advantage of the mean reversion principle to
          eliminate inefficiencies between two highly correlated assets. In a market
           that is riddled with inefficiencies, the pairs trading strategy might be a
            highly effective and lucrative trading strategy for investors in crypto
             markets. 
      </p>
      <p>
      In order to fully take advantage of the pairs trading strategy a Regression Voting Ensemble with soft voting will be implemented to attempt to forecast the future prices of identified cointegrated assets. Regression Voting Ensemble is a model that works by combining multiple different machine learning techniques in order to average all of their results to choose the optimal prediction for the data. Soft voting is the process of averaging the probabilities of all the estimators combined.
Within the Ensemble Voting model, the forecasted future returns of cointegrated crypto assets will be modeled by stacking Random Forests, Linear Regression, Orthogonal Matching Pursuit, and Gradient Boosting Regressor to create a robust crypto forecasting model.
      </p>
    </>
    </div>
  );
};

export default Home;