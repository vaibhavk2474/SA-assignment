import React, { useState } from 'react'

export default function FilterBox({ filterFun }) {


    const [city, setCity] = useState("")
    const [cluster, setCluster] = useState("")
    const [space_available_limit, setSpace_available_limit] = useState("")

    function handleInput(event) {

        // let trimedValue = event.target.value.trim()
        if (event.target.id === 'city') {
            setCity(event.target.value.trim())
        }
        if (event.target.id === 'cluster') {
            setCluster(event.target.value.trim())
        }
        if (event.target.id === 'space_available_limit') {
            // console.log(typeof event.target.value);
            setSpace_available_limit(event.target.value.trim())
        }
        // console.log(city,cluster,space_available_limit);
    }

    function fetchAllData() {
        let mainObj = {
            city: "",
            cluster: "",
            space_available_limit: ""
        }
        filterFun(mainObj);
        setCity("")
        setCluster("")
        setSpace_available_limit("")
    }

    function handleBtn() {

        let mainObj = {
            city,
            cluster,
            space_available_limit
        }
        filterFun(mainObj);

    }

    return (

        <div id="filter-box">
            <div id="filter-elements">
            <h2>Filter warehouses</h2>

                <div className='filter-elements-div'>
                    <div className='label'>

                        <label htmlFor="city">City:</label>
                    </div>
                    <div className='input'>
                        {/* <input type="text" id="city" name='city' onChange={handleInput} value={city} /> */}

                   
                        <select name="city" id="city" onChange={handleInput} value={city}>
                            <option value="" defaultValue={city} >Select an Option</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Indore">Indore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Guwahati">Guwahati</option>
                        </select>
                 </div>
                </div>


                <div className='filter-elements-div'>
                    <div className='label'>
                        <label htmlFor="cluster">cluster:</label>

                    </div>
                    <div className='input'>
                        <input type="text" name="cluster" id="cluster" onChange={handleInput} value={cluster} />
                    </div>
                </div>


                <div className='filter-elements-div'>
                    <div className='label'>
                        <label htmlFor="space-availabe-limit">space-availabe:</label>

                    </div>
                    <div className='input'>
                        {/* <input type="text" name="space_available_limit" id="space_available_limit" onChange={handleInput} value={space_available_limit} /> */}
                        <input type="number" name="space_available_limit" id="space_available_limit" onChange={handleInput} value={space_available_limit} />
                    </div>


                </div>
                <div id='filter-btn-container'>

                    <button onClick={handleBtn}>filter</button>
                    <button onClick={fetchAllData}>fetch all data</button>
                </div>

            </div>
        </div>
    )
}










/*
    const [mainObj, setMainObj] = useState({
        city:"",
        cluster:"",
        "space-available-limit":""
    })

    function handleInput(event) {

       console.log(event.target.id);

        // console.log("handle input");
        if (event.target.id ==="city") {

            let obj={
                ...mainObj,
                [event.target.id]: event.target.value,

            }
            setMainObj(obj)

        }
        if (event.target.id ==="cluster") {
            let obj={
                ...mainObj,
                [event.target.id]: event.target.value,

            }
            setMainObj(obj)

            
        }
        if (event.target.id ==="space-availabe-limit") {
            let obj={
                ...mainObj,
                [event.target.id]: event.target.value,

            }
            setMainObj({
                city:"",
                cluster:"",
                "space-available-limit":""
            })
            
        }

        
    }
*/