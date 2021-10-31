import React from "react";

let styles = {
    display : "flex" ,
    justifyContent : "space-evenly"
}

let img = "https://static.iplt20.com/players/210/164.png" ;
let img2 = "https://static.iplt20.com/players/210/236.png" ;
let img3 = "https://static.iplt20.com/players/210/177.png" ;
let img4 = "https://static.iplt20.com/players/210/41.png" ;
let img5 ="https://static.iplt20.com/players/210/211.png" ;
let img6 = "https://static.iplt20.com/players/210/3098.png" ;
let img7 = "https://static.iplt20.com/players/210/3746.png" ; 
let img8 = "https://static.iplt20.com/players/210/2885.png" ;
let img9 = "https://static.iplt20.com/players/210/103.png" ;

const Records = () => {
    return ( 
        <>
        <h1> All Time Batting Leaders </h1>
            <div style={styles}>
                
                <br /><br />
                <div className="card" style={{width: "18rem"}}>
              <img src={img}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "orange"}}> Orange Cap </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Virat Kohli </center> </h4>  
                <h1 className="card-text"> <center> 6283 </center> </h1>
                <h6> <center> Runs </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img2}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Blue"}}> Most Sixes </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Chris Gayle </center> </h4>  
                <h1 className="card-text"> <center> 357 </center> </h1>
                <h6> <center> Sixes </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img2}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Blue"}}> Highest Score </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Chris Gayle </center> </h4>  
                <h1 className="card-text"> <center> 175* </center> </h1>
                <h6> <center> Score </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img3}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "purple"}}> Best Strike Rate </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Andre Russell </center> </h4>  
                <h1 className="card-text"> <center> 178.57 </center> </h1>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img4}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Blue"}}> Most Fours </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Shikhar Dhawan </center> </h4>  
                <h1 className="card-text"> <center> 654 </center> </h1>
                <h6> <center> Fours </center></h6>
              </div>
            </div>
            </div>

        <br /><br />

        <h1> All Time Bowling Leaders </h1>
            <div style={styles}>
                
                <br /><br />
                <div className="card" style={{width: "18rem"}}>
              <img src={img5}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Purple"}}> Purple Cap </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Lasith Malinga </center> </h4>  
                <h1 className="card-text"> <center> 170 </center> </h1>
                <h6> <center> Wickets </center></h6>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img6}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Blue"}}> Best Bowling Figure </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Alzarri Joseph </center> </h4>  
                <h1 className="card-text"> <center> 6/12 </center> </h1>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img7}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Blue"}}> Best Bowling Average </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Lungi Ngidi </center> </h4>  
                <h1 className="card-text"> <center> 17.92 </center> </h1>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img8}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "purple"}}> Best Economy </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Rashid Khan </center> </h4>  
                <h1 className="card-text"> <center> 6.33 </center> </h1>
              </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src={img9}  className="card-img-top" alt="..."/>
              <p className="card-text"> <center className="text-white" style={{backgroundColor : "Blue"}}> Most Dots </center></p>
              <div className="card-body">
                <h4 className="card-title"> <center> Harbhajan Singh </center> </h4>  
                <h1 className="card-text"> <center> 1,268 </center> </h1>
              </div>
            </div>
            </div>
        </>
     );
}
 
export default Records;