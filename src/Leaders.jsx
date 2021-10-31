import React from "react";
import Card from "./Card";

let styles = {
    display: "flex" ,
    justifyContent: "space"
}

let img = "https://static.iplt20.com/players/210/5443.png" ;
let img2 = "https://static.iplt20.com/players/210/157.png" ;
let img3 = "https://static.iplt20.com/players/210/509.png" ;
let img4 = "https://static.iplt20.com/players/210/177.png" ;
let img5 = "https://static.iplt20.com/players/284/1125.png";

const Leaders = () => {
    return ( 
        <> 
            <div  className="container-fluid"  style={styles}>
            <div className="card" style={{width: "18rem"}}>
              <img src={img}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center style={{backgroundColor : "orange"}}> Orange Cap </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Ruturaj Gaikwad </center> </h4>  
                <h1 className="card-text"> <center> 635 </center> </h1>
                <h6> <center> Runs </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img2}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "purple"}}> Purple Cap </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Harshal Patel </center> </h4>  
                <h1 className="card-text"> <center> 32 </center> </h1>
                <h6> <center> Wickets </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img3}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "blue"}}> Highest Score </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Jos Buttler </center> </h4>  
                <h1 className="card-text"> <center> 124 </center> </h1>
                <h6> <center> Runs </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img4}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center style={{backgroundColor : "orange"}}> Best Bowling Figure </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Andre Russel </center> </h4>  
                <h1 className="card-text"> <center> 5/15 </center> </h1>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center style={{backgroundColor : "yellow"}}> Most Fours </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Ruturaj Gaikwad </center> </h4>  
                <h1 className="card-text"> <center> 64 </center> </h1>
                <h6> <center> Fours </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img5}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center style={{backgroundColor : "Red"}}> Most Sixes </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> KL Rahul </center> </h4>  
                <h1 className="card-text"> <center> 30 </center> </h1>
                <h6> <center> Sixes </center></h6>
              </div>
            </div>
            </div>
        </>
     );
}
 
export default Leaders;