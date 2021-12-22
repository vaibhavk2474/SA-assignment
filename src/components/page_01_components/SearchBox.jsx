import React,{useState} from 'react'

export default function SearchBox(props) {
    let {searchItemFun} = props


    const [value, setValue] = useState("")

    function inputHandler(event) {

        let val = event.target.value

        setValue(val)

    }

    function searchBtnHandler() {
        // console.log(value.trim());

        searchItemFun(value.trim())
        
    }
    return (
        <div id='search-bar-container'>
            
            <h2>Search Warehouse</h2>
            <input type="text" name="search-bar" id="search-bar" placeholder='search warehouse' onChange={inputHandler} value={value}/>
            <button onClick={searchBtnHandler}>search</button>
        </div>
    )
}
