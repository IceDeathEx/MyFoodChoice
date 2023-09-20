import React from 'react';
import Navbar from './Navbar';

const Transaction = () => {
    return (
        <div>
            <Navbar/>
            <div className="divcss">
              <h2>Transaction page</h2>
              <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Item name</th>
                                <th>Cost of Transaction</th>
                              <th>DateTime of Purchase</th>
                            </tr>
                        </thead>
              <tbody>
                            <tr>
                                <td>1</td>
                                <td>FitBit Watch</td>
                                <td>100000 LP</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>FP 20</td>
                                <td>1000LP</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Vegan Steak Recipe</td>
                                <td>$3.99</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>2023 Summer recipes</td>
                                <td>$15.99</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>FP 10</td>
                                <td>500 LP</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                        </tbody>

            </div>
        </div>
    );
};

export default Transaction;