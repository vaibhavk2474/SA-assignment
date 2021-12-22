import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function List(props) {
    let { data } = props;
    // console.log(data);

    return (
        <div id='list-container' className='grid-container'>

            {
                data && data.map((item) => {

                    // console.log(item);
                    return (
                        <div className='item grid-item' key={item.id}>
                            <div style={{ margin: "40px" }}>
                                <div>
                                    <p>Warehouse name: </p><span>{item.name}</span>

                                </div>

                                <div>
                                    <p>city:</p><span>{item.city}</span>

                                </div>

                                <div>
                                    <p>space_available:  </p><span>{item.space_available}</span>

                                </div>

            

                                <div>
                                    <p>cluster:  </p><span>{item.cluster}</span>

                                </div>

                                <div>
                                    <p>code: </p><span>{item.code}</span>

                                </div>


                                <Link to={`/${item.id}`} style={{textDecoration:"none"}}>go to this item</Link>

                            </div>
                        </div>
                    )

                })
            }

        </div>
    )
}
