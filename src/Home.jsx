import React from "react";

let img = "http://www.firstpost.com/wp-content/uploads/2021/09/MS-Dhoni-Eoin-Morgan-640.jpg" ;
let img2 = "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3252/913252-h" ;
let img3 = "https://resources.platform.iplt20.com/photo-resources/2021/09/18/3da345c0-8a86-4a51-a7a9-0435e8a64bd9/IPL-2021.jpg?width=2000&height=1333"


const Home = () => {
    return ( 
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href="https://www.hotstar.com/in/sports/sports/highlights-csk-clinch-fourth-title/1540008550" target="_blank"><img src={img} className="d-block w-100" alt="..."  style={{height : "500px"}}/></a>
      <div className="carousel-caption d-none d-md-block">
        <h5>Replay: CSK vs KKR, final</h5>
        <p>Watch the replay of the final match of VIVO IPL 2021</p>
      </div>
    </div>
    <div className="carousel-item">
      <a href="https://www.hotstar.com/in/sports/sports/replay-vivo-ipl-2021-auction/1540005368"  target="_blank"><img src={img2} className="d-block w-100" alt="..."  style={{height : "500px"}}/></a>
      <div className="carousel-caption d-none d-md-block">
        <h5>Replay: VIVO IPL 2021 Auction</h5>
        <p>Watch the replay of VIVO IPL 2021 Player Auction</p>
      </div>
    </div>
    <div className="carousel-item">
      <a href="https://www.bcci.tv/articles/2021/news/155191/bcci-announces-the-successful-bidders-for-two-new-indian-premier-league-franchises" target="_blank"><img src={img3} className="d-block w-100" alt="..."  style={{height : "500px"}}/></a>
      <div className="carousel-caption d-none d-md-block">
        <h5>BCCI announces successful bidders for two new IPL Franchises</h5>
        <p> BCCI announces the successful bidders for two new Indian Premier League Franchises </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
     );
}
 
export {Home};