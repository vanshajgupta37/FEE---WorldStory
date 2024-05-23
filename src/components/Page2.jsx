import {image, image_2, image_3} from '../assets'
import '../App.css';
function Page2() {
    return(
        <div class="group-2 match-height group">
        <div class="main-blog-image">
          <div class="rectangle-2-holder">
            <div class="copy">
              <p class="text-6">Latest from the web for you</p>
              <div class="row-30 group">
                <div class="rounded-rectangle-1-holder">
                  FASHION
                </div>
                <div class="rounded-rectangle-1-copy-holder">
                  LIFESTYLE
                </div>
                <p class="text-7">| &nbsp;&nbsp;&nbsp;&nbsp;03. June 2019</p>
              </div>
              <p class="text-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
            </div>
          </div>
          <div class="rectangle-2-copy"></div>
        </div>
        <div class="right-side">
          <div class="group-3">
            <div class="copy-2">
              <div class="rounded-rectangle-1-copy-2-holder">
                FASHION
              </div>
              <div class="wrapper-28 group">
                <p class="text-10">Latest from the web for you</p>
                <img class="text-12" src={image_3} alt="" title=""/>
                <p class="text-11">03. June 2019</p>
              </div>
            </div>
          </div>
          <div class="group-4">
            <div class="copy-3">
              <div class="rounded-rectangle-1-copy-2-holder-2">
                FASHION
              </div>
              <div class="wrapper-27 group">
                <p class="text-14">Latest from the web for you</p>
                <img class="text-16" src={image_2} alt="" title=""/>
                <p class="text-15">03. June 2019</p>
              </div>
            </div>
          </div>
          <div class="group-5">
            <div class="rounded-rectangle-1-copy-2-holder-3">
              FASHION
            </div>
            <div class="wrapper-24 group">
              <p class="text-18">Latest from the web for you</p>
              <img class="text-20" src={image} alt="" title=""/>
              <p class="text-19">03. June 2019</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Page2;