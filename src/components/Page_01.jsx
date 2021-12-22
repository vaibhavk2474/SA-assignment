import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import FilterBox from './page_01_components/FilterBox';
import List from './page_01_components/List'
import SearchBox from './page_01_components/SearchBox';


function Page_01(props) {
    let { data } = props

    const [state, setstate] = useState(data);
    // console.log(state,8,"see here");

    function searchItemFun(searchUsingThisStr) {

        // console.log(searchUsingThisStr,"this is the str by which we have to search");
        if (searchUsingThisStr === "") {
            console.log("empty string");
            setstate(data)

            return;
        }
        const searchedItemArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return item.name.toLowerCase() === searchUsingThisStr.toLowerCase()
        })

        setstate(searchedItemArr)


    }

    function filterFun(objOfFilteringElements) {

        filter(objOfFilteringElements,setstate,data)
        
    }

    useEffect(() => {

        setstate(data)
    }, [data])



    return (
        <div>

            <SearchBox searchItemFun={searchItemFun}></SearchBox>
            <FilterBox filterFun={filterFun}></FilterBox>
            <List data={state}  ></List>
        </div>
    )
}





const mapStoreToProps = (store) => {
    console.log(store);
    return {
        data: store.reducer
    }

};


export default connect(mapStoreToProps, null)(Page_01)


function filter(objOfFilteringElements,setstate,data) {
    // console.log("filterFun");

    // console.log(objOfFilteringElements);
    let { city, cluster, space_available_limit } = objOfFilteringElements

    if (!city && !cluster && !space_available_limit) {
        console.log("put all filters");
        // alert("please fill filtering elements ")
        setstate(data)

        return;
    }





    if (!cluster && !space_available_limit && city) {
        const filteredArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return item.city === objOfFilteringElements.city
        })
        console.log(49);
        setstate(filteredArr)
    }

    if (!space_available_limit && city && cluster) {
        const filteredArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return item.city === objOfFilteringElements.city &&
                item.cluster === objOfFilteringElements.cluster
        })
        console.log(59);

        setstate(filteredArr)
    }

    if (city && cluster && space_available_limit) {
        const filteredArr = data && data.filter((item) => {
            console.log("item.name,searchUsingThisStr");
            return item.city === objOfFilteringElements.city &&
                item.cluster === objOfFilteringElements.cluster &&
                Number(item.space_available) === Number(objOfFilteringElements.space_available_limit);
        })
        setstate(filteredArr)

    }

    if (cluster && !space_available_limit && !city) {
        const filteredArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return item.cluster === objOfFilteringElements.cluster
        })

        console.log(49);
        setstate(filteredArr)
    }

    if (!cluster && space_available_limit && !city) {
        const filteredArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return Number(item.space_available) === Number(objOfFilteringElements.space_available_limit)
        })

        console.log(49);
        setstate(filteredArr)
    }


    if (!cluster && space_available_limit && city) {
        const filteredArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return  item.city === objOfFilteringElements.city && 
            Number(item.space_available) === Number(objOfFilteringElements.space_available_limit)
        })

        console.log(49);
        setstate(filteredArr)
    }
    if (cluster && space_available_limit && !city) {
        const filteredArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            return  item.cluster === objOfFilteringElements.cluster && 
            Number(item.space_available) === Number(objOfFilteringElements.space_available_limit)
        })

        console.log(49);
        setstate(filteredArr)
    }
}