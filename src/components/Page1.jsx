import {image_4, image_5, image_6,menu_icon} from '../assets'
import '../App.css';
function Page1() {
    return(
      <div class="bg">
      <div class="rectangle-1"></div>
      <div class="rectangle-1-copy-holder">
        <div class="navigation-bar group">
          <img class="menu-icon" src={menu_icon}/>
          <div class="logo">
            World<span class="color0e0e0e">Story</span>
          </div>
          <nav class="nav-2">
            <ul class="nav-list-2 group">
              <li><p className="nav-item-1-5"><a href="#">News</a></p></li>
              <li><p className="nav-item-1-6"><a href="#">Fashion</a></p></li>
              <li><p className="nav-item-1-7"><a href="#">Lifestyle</a></p></li>
              <li><p className="nav-item-1-8"><a href="#">Travel</a></p></li>
            </ul>
          </nav>
          <img className="text" src={image_4}/>
        </div>
      </div>
      <div className="top-bar group">
        <div className="date group">
          <img className="text-2" src={image_6}/>
          <p className="text-3">03. June 2019</p>
        </div>
        <div className="city-temp group">
          <img className="text-4" src={image_5.png}/>
          <p className="text-5">New York &nbsp;55.F</p>
        </div>
        <div className="rectangle-3-copy-4"></div>
        <p className="nav-item-1-12"><a href="#">Travel</a></p>
        <div className="rectangle-3-copy-3"></div>
        <p className="nav-item-1-11"><a href="#">Lifestyle</a></p>
        <div className="rectangle-3-copy-2"></div>
        <p className="nav-item-1-10"><a href="#">Fashion</a></p>
        <div className="rectangle-3-copy"></div>
        <p className="nav-item-1-9"><a href="#">News</a></p>
        <div className="rectangle-3"></div>
      </div>
    </div>


    );
}

export default Page1;