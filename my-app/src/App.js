import React from "react";
import Card from './Componnets/Card';
import Data from './data.json';
function App(){
    let items=[];
    for(let x=0;x<Data.length;x++){
        items.push(<Card title={Data[x].Title} des={Data[x].Des}/>)
    }
    return <div>
        {items}
    </div>

}
export default App;