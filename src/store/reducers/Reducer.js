import data from "../data/Data";

let initialState = data;

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "WAREHOUSE_EDITED":
    //   console.log(action.item);
      let item =action.item;
      let newState = updateWarehouse(state, item);
      console.log(newState);
      return newState;

    default:
      return state;
  }
}

function updateWarehouse(data, singleItem) {

    let updatedDataArr = data.filter((item)=>{

        return item.id!==singleItem.id

    })


    updatedDataArr.push(singleItem);
    
    updatedDataArr.sort((a,b)=>{
        return a.id-b.id;
    })
    console.log(updatedDataArr);
    return updatedDataArr;
}
