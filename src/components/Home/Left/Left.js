import "./Left.css";

function Left() {
  return (
      <div className="left">
        <div className="name">Tu<span>♫</span>eBag</div>
    <div className="menu">
      <div className="title">MENU</div>
      <div className="sub-menu">
        <i className="fa-solid fa-house"></i> Discover
      </div>
      <div className="sub-menu">
        <i className="fa-solid fa-headphones-simple"></i> Trending
      </div>
      <div className="sub-menu">
      <i className="fa-solid fa-headphones-simple"></i> Streaming
      </div>
    </div>

    <div className="menu">
      <div className="title">PLAYLIST</div>
      <div className="sub-menu">
      <i className="fa-solid fa-forward"></i> Discover
      </div>
      <div className="sub-menu">
      <i className="fa-solid fa-forward"></i> Trending
      </div>
      <div className="sub-menu">
      <i className="fa-solid fa-forward"></i> Streaming
      </div>
      <div className="add_play">ADD PLAYLIST
      <button>+</button>
      </div>
    </div>

  

    </div>
  );
}

export default Left;
