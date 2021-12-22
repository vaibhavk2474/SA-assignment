import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import WarehouseDetails from './page_02_components/WarehouseDetails';

function Page_02(props) {
    // console.log(props,6);
    let params = useParams()
    // console.log(params.itemId);
    let {data} = props;
    let itemId = params.itemId

    const [state, setstate] = useState([])
    
    
    
    useEffect(() => {
        
        const singleItemArr = data && data.filter((item) => {
            // console.log(item.name,searchUsingThisStr);
            // console.log( item.id,Number(itemId));
            return item.id === Number(itemId);
        })
        // console.log(singleItemArr);
         setstate(singleItemArr)
    
    }, [data])


    return (
        <div style={{background:"#f5f5f5",height:"100vh"}}>
            <div style={{    height: "5vh",padding: "5px",}}>

            <Link to="/" style={{textDecoration:"none"}}>back</Link>
            </div>
            {
                
                state&&state.map((item)=>{

                    // console.log(state,data);
                    return (
                        <WarehouseDetails key={item.id} item={item}></WarehouseDetails>
                        
                    )
                })
            }
        
        </div>
    )
}

const mapStoreToProps=(store)=>{
    console.log(store,47);
return {
    data:store.reducer
}
}

export default connect(mapStoreToProps,null)(Page_02)