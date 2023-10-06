import React from 'react';
import NavBarUser from './NavBarUser';

const Transaction = () => {
    return (
        <div>
            <NavBarUser/>
            <div className="divcss">
              <h2>Loyalty Transaction section</h2>
              <label>Search for record: </label><input type="search"/>
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
                        <h2>Transaction history section</h2>
                        <label>Search for record: </label><input type="search"/>
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