import React from 'react';
// import poster from '../MidtermResults.png'
import './ProjectResults.css';
import table from '../table.JPG';
const ProjectResults = () => {
    return (
      //<div style = {{backgroundColor: 'white', height:"150vh",width:"200vh"}}>
      <div className='project-results-container'>
        <header>
          <h1>Project Results</h1>
        </header>
        <h4>
          Ensemble Model
        </h4>
        <p>
        In an ensemble machine learning approach, multiple models are combined to achieve improved overall performance. In this case, the 9 models - Random Forest, K-Nearest Neighbors (KNN), Gradient Boosting, Partial Least Squares (PLS), and Orthogonal Matching Pursuit (OMP), Ada-Boost, Ridge, Support Vector Regression (SVR), Stochastic Gradient Descent (SGD) - will work together to produce a more accurate and robust prediction. The performance metrics provided for each model will be used to analyze their individual
        contributions to the ensemble.
        </p>
        <table>
            <colgroup span="3"></colgroup>
            <tr>
                <th>Model</th>
                <th>RMSE</th>
                <th>R-Squared</th>
            </tr>
            <tr>
                <td>Random Forest</td>
                <td>0.05422</td>
                <td>0.837757</td>
            </tr>
            <tr>
                <td>KNN</td>
                <td>0.070388</td>
                <td>0.726568</td>
            </tr>
            <tr>
                <td>Gradient Boosting</td>
                <td>0.05216</td>
                <td>0.849846</td>
            </tr>
            <tr>
                <td>PLS</td>
                <td>0.049702</td>
                <td>0.863668</td>
            </tr>
            <tr>
                <td>OMP
                </td>
                <td>0.017896</td>
                <td>0.982324</td>
            </tr>
            <tr>
                <td>Ada Boost</td>
                <td>0.05392</td>
                <td>0.839545</td>
            </tr>
            <tr>
                <td>SGD</td>
                <td>0.43584</td>
                <td>0.895162</td>
            </tr>
            <tr>
                <td>SVR</td>
                <td>0.058471</td>
                <td>0.81132</td>
            </tr>
            <tr>
                <td>Ridge</td>
                <td>0.021168</td>
                <td>0.97527</td>
            </tr>
        </table>
      
        <p>
        The OMP model exhibits the best performance among the nine models, with the lowest values for MSE, RMSE, and MAE. Consequently, it will likely have a strong positive influence on the ensembles overall performance. The PLS model follows closely with the second-best performance, making it another valuable contributor to the ensemble. These two models can potentially compensate for the weaker performance of the other three models, especially in cases where the weaker models might overfit or fail to capture
        specific patterns in the data. The Gradient Boosting model, which presents a middle ground between the OMP and PLS models and the Random Forest and KN
        models, could still contribute valuable information to the ensemble. While it may not be as accurate as the OMP and PLS models, its distinct learning approach can help capture patterns missed by the
        other models, thus enhancing the ensemble's performance.
        The Random Forest and KNN models, despite having relatively
        higher error values, can still play a role in the ensemble approach. Their unique learning mechanisms can capture different aspects of the data, complementing the other models and potentially improving the overall performance. However, it is crucial to carefully manage their weights in the ensemble to avoid negative impacts
        on the final predictions.
        </p>
        <h4>
          ARIMA Model
        </h4>
        <p>
        Note that the p-values for both cryptocurrencies are all very high, above 0.05. Additionally, the majority of the critical values are less than the values of their respective Augmented Dicky Fuller test statistic. 
        As a result, we cannot reject the null hypothesis, which leaves us to conclude that the time series data is not stationary. 
        Intuitively, this makes sense in the context of cryptocurrency prices. This is because changes in crypto prices are generally speaking the result of mean independent increments that occur to daily economic shocks. 
        These movements in prices depend on the previous price. One method of dealing with this issue is to model the returns of the crypto prices instead of the prices. 
        While daily prices are generally non stationary while the daily returns are generally stationary. 
        Which by definition is a linear stochastic process that has a unit root of 1 which describes a non-stationary process. While taking the percent change is a good method to remove this effect another method is to take the log difference of the function. 
        Applying the log difference to the function is useful as logarithms are time-invariant and will help to stabilize the variance. Taking the first order of difference of this function can be used to obtain the required stationary data. 
        </p>
        <h4>
             Conclusion
        </h4>
        <p>
        In summary, the ensemble voting mechanism that stacks several models can lead to improved performance by leveraging the strengths of each model while mitigating their weaknesses. 
        The OMP and PLS models will likely have a significant positive impact on the ensembles performance, with Gradient Boosting, Random Forest, and KNN models providing additional complementary information.

        </p>
        <h5>
          Link to Final Paper
        </h5>
      </div>
    );
  };
  export default ProjectResults;