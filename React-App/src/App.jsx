import React from "react";
import Card from "./components/Card";


function App(){
    return <div>
        <h1 className="headingStyle">
            Todo App
        </h1>
        <Card titleText="This is title" desText="This is the description1"></Card>
        <Card titleText="This is title2" desText="This is the description2"></Card>
        <Card titleText="This is title3" desText="This is the description3"></Card>
    </div>

}
export default App;