import "./Right.css";

function Right() {
  return (
    <div className="right">
      <div className="nav">
        <div className="discover">DISCOVER</div>
        <div className="right-side">
          <i className="fa-solid fa-heart fav"></i>
          <img src="images/user2.png" alt="unavailable" className="user" />
        </div>
      </div>

      <div className="list">
        <div className="title">RECENTLY PLAYED</div>
        <div className="recently">
          <div className="sub">
            <img src="images/album.jpg" alt="unavailable" className="album" />
            <div className="song">Cold Heart</div>
            <div className="singer">Elon John</div>
          </div>
          <div className="sub">
            <img src="images/album.jpg" alt="unavailable" className="album" />
            <div className="song">Cold Heart</div>
            <div className="singer">Elon John</div>
          </div>
          <div className="sub">
            <img src="images/album.jpg" alt="unavailable" className="album" />
            <div className="song">Cold Heart</div>
            <div className="singer">Elon John</div>
          </div>
        </div>
      </div>

      <div className="billboard">
        <div className="title">TOP 100 BILLBOARD</div>
        <div className="song-list">
          <div className="individual-song">
            <img src="images/album.jpg" alt="unavailable" className="mini" />
            <div className="info">
              <div className="song">Cold Heart</div>
              <div className="singer">Elon John</div>
            </div>
            <div className="divide">Divide</div>
            <div className="music">543,586,949</div>
            <div className="duration">3:31</div>
            <div className="fav_btn"><ion-icon name="heart-outline"></ion-icon></div>
          </div>

          <div className="individual-song">
            <img src="images/album.jpg" alt="unavailable" className="mini" />
            <div className="info">
              <div className="song">Cold Heart</div>
              <div className="singer">Elon John</div>
            </div>
            <div className="divide">Divide</div>
            <div className="music">543,586,949</div>
            <div className="duration">3:31</div>
            <div className="fav_btn"><ion-icon name="heart-outline"></ion-icon></div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Right;
