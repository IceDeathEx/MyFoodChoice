import React from 'react';

const Dinner = () => {
    return (
        <div>
            <input type="text" id="myInput" placeholder="Search for food.."></input>

            <ul id="foodList">
                <details>
                    <summary>Food Item 1</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                </details>
                <details>
                    <summary>Food Item 2</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                </details>
                <details>
                    <summary>Food Item 3</summary>
                    <p>
                        Epcot is a theme park at Walt Disney
                        World Resort featuring exciting attractions, international pavilions,
                        award-winning fireworks and seasonal special events.
                    </p>

                </details>
            </ul>
        </div>
    );
};

export default Dinner;