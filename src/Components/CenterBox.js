import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


function CenterBox() {

    const [coffeeName, setCoffeeName] = useState([]);

    useEffect(() => {

        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
            .then(((response) => response.json()))
            .then((result) => setCoffeeName(result))
            .catch((error) => console.error('Error fetching data:', error));

    }, [])

    return (

        <div className='center-box-container'>

            <div className='center-box-inner-container'>

                <div className='content'>

                    <div className='our-collection'>
                        <h1 className='dm-sans'>Our Collection</h1>
                        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    </div>

                    <div className='buttons'>
                        <button className='all-products'>All Products</button>
                        <button className='available-now'>Available Now</button>
                    </div>

                </div>

                <div className='coffee-list'>

                    <div className='coffee-list-container1'>

                        {coffeeName.length > 0 ? (coffeeName.slice(0).map((coffee) => (
                            <div className='coffee' key={coffee.id}>

                                <div className='coffee-image'>
                                    <img src={coffee.image} />
                                    {coffee.popular == true ? <div className='coffee-popular'>Popular</div> : ""}
                                </div>

                                <div className='coffee-details'>

                                    <div className='cof-name-price'>

                                        <div className='coffee-name'>{coffee.name}</div>
                                        <div className='coffee-price'>{coffee.price}</div>

                                    </div>

                                    <div className='cof-rate-vote-available'>

                                        {coffee.rating == null ?
                                            <div>
                                                <FaRegStar style={{ color: "#6F757C", marginRight: '5px', marginLeft: '5px' }} />
                                                <div className='coffee-rating' style={{ color: "#6F757C" }}>&nbsp;No ratings</div>
                                            </div>
                                            :
                                            <div>
                                                <FaStar style={{ color: 'yellow', marginRight: '5px', marginLeft: '5px' }} />
                                                <div className='coffee-rating'>{coffee.rating}</div>
                                                <div className='coffee-vote'>&nbsp;({coffee.votes}&nbsp;votes)</div>
                                            </div>
                                        }

                                        <div className='coffee-available'>{coffee.available == true ? "" : "Sold out"}</div>

                                    </div>

                                </div>

                            </div>
                        ))) : (
                            <p>Loading...</p>
                        )}

                    </div>

                    {/* <div className='coffee-list-container-margin'></div> */}

                    {/* <div className='coffee-list-container'>

                        {coffeeName.length > 0 ? (coffeeName.slice(3).map((coffee) => (
                            <div className='coffee' key={coffee.id}>

                                <div className='coffee-image'>
                                    <img src={coffee.image} />
                                    {coffee.popular == true ? <div className='coffee-popular'>Popular</div> : ""}
                                </div>

                                <div className='coffee-details'>

                                    <div className='cof-name-price'>

                                        <div className='coffee-name'>{coffee.name}</div>
                                        <div className='coffee-price'>{coffee.price}</div>

                                    </div>

                                    <div className='cof-rate-vote-available'>

                                        {coffee.rating == null ?
                                            <div>
                                                <FaRegStar style={{ color: "#6F757C", marginRight: '5px', marginLeft: '5px' }} />
                                                <div className='coffee-rating' style={{ color: "#6F757C" }}>&nbsp;No ratings</div>
                                            </div>
                                            :
                                            <div>
                                                <FaStar style={{ color: 'yellow', marginRight: '5px', marginLeft: '5px' }} />
                                                <div className='coffee-rating'>{coffee.rating}</div>
                                                <div className='coffee-vote'>&nbsp;({coffee.votes}&nbsp;votes)</div>
                                            </div>
                                        }

                                        <div className='coffee-available'>{coffee.available == true ? "" : "Sold out"}</div>

                                    </div>

                                </div>

                            </div>
                        ))) : (
                            <p>Loading...</p>
                        )}

                    </div> */}





                </div>

            </div>

        </div>

    )
}

export default CenterBox;
