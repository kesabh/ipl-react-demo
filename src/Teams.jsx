import React from "react";

let img = "https://static.toiimg.com/thumb/msid-72902668,width-1200,height-900,resizemode-4/.jpg" ;
let img2 = "https://cdn.shopify.com/s/files/1/2658/5942/files/KKR-LOGO-WITH-BACK.jpg?height=628&pad_color=3b215d&v=1583755340&width=1200" ;
let img3 = "https://pixlok.com/wp-content/uploads/2021/01/DC_Logo_With_Background.jpg" ;
let img4 = "https://pixlok.com/wp-content/uploads/2021/01/MI_Logo_With_Blue_Background.jpg" ;
let img5 = "https://play-lh.googleusercontent.com/pLu6Pcn6GpMKmRBHbDYUWn6rdR6eeU3xDqv3sKtcYuuUWuNlEvc3M4Th4HW-Zu79WQ" ;
let img6 = "https://static.toiimg.com/thumb/msid-76506899,width-1200,height-900,resizemode-4/.jpg" ;
let img7 = "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg" ;
let img8 = "https://pixlok.com/wp-content/uploads/2021/01/Sunrisers_Hyderabad_Logo_with_Background.jpg" ;

let styles = {
    display : "flex" ,
    justifyContent : "space-evenly"
}

const Teams = () => {
    return ( 
        <>
            <div  className="container-fluid"   style={styles}>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Chennai Super Kings </h5>
                    <p className="card-text"> Captain : MS Dhoni </p>
                  </div>
                </div>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img3} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Delhi Capitals </h5>
                    <p className="card-text"> Captain : Rishabh Pant </p>
                  </div>
                </div>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img2} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Kolkata Knight Riders </h5>
                    <p className="card-text"> Captain : Eoin Morgan </p>
                  </div>
                </div>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img4} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Mumbai Indians </h5>
                    <p className="card-text"> Captain : Rohit Sharma </p>
                  </div>
                </div>
            </div>
            <br />
            <div  className="container-fluid"   style={styles}>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img5} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Punjab Kings </h5>
                    <p className="card-text"> Captain : KL Rahul </p>
                  </div>
                </div>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img6} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Rajasthan Royals </h5>
                    <p className="card-text"> Captain : Sanju Samson </p>
                  </div>
                </div>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img7} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Royal Challengers Bangalore </h5>
                    <p className="card-text"> Captain : Virat Kohli </p>
                  </div>
                </div>
                <div className="card" style={{width: "20rem"}}>
                  <img src={img8} className="card-img-top" alt="..."  style={{height : "300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"> Subrisers Hyderabad </h5>
                    <p className="card-text"> Captain : Kane Williamson </p>
                  </div>
                </div>
            </div>
        </>
     );
}
 
export default Teams;