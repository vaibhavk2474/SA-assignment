import React, { useState } from 'react'
import { connect } from 'react-redux';

// let obj = {

//     "name": "",
//     "code": "",
//     "id": 1,
//     "city": "",
//     "space_available": 0,
//     "type": "",
//     "cluster": "",
//     "is_registered": false,
//     "is_live": false

// }
function WarehouseDetails(props) {

    console.log(props);

    let { item, editWareHouseItem } = props

    function handleBtn() {

        const input_space_availabe = document.getElementById("space_available")
        const input_city = document.getElementById("city")
        const input_name = document.getElementById("name")
        const input_cluster = document.getElementById("cluster")
        const input_liveStatus = document.getElementById("is_live")

        console.log(input_space_availabe.value, input_city.value);

        let arr = [];
        arr.push(input_space_availabe)
        arr.push(input_city);
        arr.push(input_name)
        arr.push(input_cluster);
        arr.push(input_liveStatus);

        arr = arr.filter((item) => {

            return item.value.trim() !== "";
        })


        let obj = {
            ...item,
        }
        for (let i = 0; i < arr.length; i++) {

            if (arr[i].id === "space_available") {


                let value = Number(arr[i].value)
                obj[arr[i].id] = value

            } else if (arr[i].id === "is_live") {

                console.log(59, arr[i].value.trim() === "true");


                arr[i].value.trim() === "true" ?
                    obj[arr[i].id] = true :
                    obj[arr[i].id] = false;

            } {

                obj[arr[i].id] = arr[i].value
            }


        }



        console.log(obj.is_live, typeof obj.is_live);
        editWareHouseItem(obj)

    }




    return (
        <div id="item-container">



            <div className='single-grid-item' key={item.id}>
                <h2>warehouse details:</h2>
                <div className="single-warehouse-details">
                    <div>
                        <p>warehouse id:  </p><span>{item.id}</span>

                    </div>
                    <div>
                        <p>Warehouse name: </p><span>{item.name}</span>

                    </div>
                    <div>
                        <p>city:</p><span>{item.city}</span>

                    </div>
                    <div>
                        <p>code: </p><span>{item.code}</span>

                    </div>



                    <div>
                        <p>cluster:  </p><span>{item.cluster}</span>

                    </div>



                    <div>
                        <p>space_available:  </p><span>{item.space_available}</span>

                    </div>



                    <div>
                        <p>live status:  </p><span>{item.is_live === "true" ? "true" : "false"}</span>

                    </div>
                </div>

            </div>




            <div >
                <h2 style={{marginLeft:"18px"}}>Edit Warehouse Details:</h2>
                <div className='edit-item-container'>
                    <div id="edit-item">

                        <div className='edit-item-div'>
                            <div className="label">

                                <label htmlFor="name">name</label>
                            </div>

                            <div className="input">
                                <input type="text" name="name" id="name" />

                            </div>

                        </div>

                        <div className='edit-item-div'>
                            <div className="label">

                                <label htmlFor="space_available">space_available</label>
                            </div>

                            <div className="input">

                                <input type="number" name="space_available" id="space_available" />
                            </div>


                        </div>

                        <div className='edit-item-div'>
                            <div className="label">

                                <label htmlFor="city">city</label>
                            </div>

                            <div className="input">
                                <input type="text" name="city" id="city" />

                            </div>

                        </div>


                        <div className='edit-item-div'>
                            <div className="label">

                                <label htmlFor="cluster">cluster</label>
                            </div>

                            <div className="input">
                                <input type="text" name="cluster" id="cluster" />

                            </div>

                        </div>
                        <div className='edit-item-div'>
                            <div className="label">
                                <label htmlFor="is_live">live status</label>

                            </div>

                            <div className="input">
                                <select name="is_live" id="is_live">
                                    <option value="true">true</option>
                                    <option value="false">false</option>

                                </select>
                            </div>

                        </div>


                        <div className='edit-item-div'>

                            <button onClick={handleBtn}>save</button>



                        </div>



                    </div>
                </div>
            </div>

        </div>

    )
}


const mapDispatchToprops = (dispatch) => {
    return {

        editWareHouseItem: (item) => {
            dispatch({ type: "WAREHOUSE_EDITED", item })

        }
    }
}
export default connect(null, mapDispatchToprops)(WarehouseDetails)