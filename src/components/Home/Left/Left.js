import "./Left.css";

function Left() {
  return (
      <div className="left">
    <div className="menu">
      <div className="title">MENU</div>
      <div className="sub-menu">
        <i class="fa-solid fa-house"></i> Discover
      </div>
      <div className="sub-menu">
        <i class="fa-solid fa-headphones-simple"></i> Trending
      </div>
      <div className="sub-menu">
      <i class="fa-solid fa-headphones-simple"></i> Streaming
      </div>
    </div>

    <div className="menu">
      <div className="title">PLAYIST</div>
      <div className="sub-menu">
      <i class="fa-solid fa-forward"></i> Discover
      </div>
      <div className="sub-menu">
      <i class="fa-solid fa-forward"></i> Trending
      </div>
      <div className="sub-menu">
      <i class="fa-solid fa-forward"></i> Streaming
      </div>
      <div className="add_play">ADD PLAYLIST
      <button>+</button>
      </div>
    </div>
    </div>
  );
}

export default Left;
