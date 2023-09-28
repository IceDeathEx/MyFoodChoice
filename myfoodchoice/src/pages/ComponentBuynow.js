import icon from '../pics/Icon.png';
import '../css/StyleBuyNow.css';
import image from '../pics/rectangle-336.png'

const ComponentBuynow = () => {
  return (
        <div className="frame">
          <div className="text-wrapper">Buy your food?</div>
          <div className="element-1">
            <div className="image-title">
              <div className="rectangle-wrapper">
                <img className="rectangle" alt="Rectangle" src={image} />
              </div>
              <div className="name-location-price">
                <div className="name-location">
                  <div className="name">Cheese Burger</div>
                  <div className="location">
                  <img className="icon" src={icon} alt={icon}/>
                    <div className="text">Subway</div>
                  </div>
                </div>
                <div className="price">
                  <div className="div">$3.88</div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="text-2">Order Now</div>
            </button>
          </div>
          <div className="element-2">
            <div className="image-title">
              <div className="rectangle-wrapper">
                <img className="rectangle" alt="Rectangle" src={image} />
              </div>
              <div className="name-location-price">
                <div className="name-location">
                  <div className="name">Cheese Burger</div>
                  <div className="location">
                    <img className="icon" src={icon} alt={icon}/>
                    <div className="text">Subway</div>
                  </div>
                </div>
                <div className="price">
                  <div className="div">$3.88</div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="text-2">Order Now</div>
            </button>
          </div>
          <div className="element-3">
            <div className="image-title">
              <div className="rectangle-wrapper">
                <img className="rectangle" alt="Rectangle" src={image} />
              </div>
              <div className="name-location-price">
                <div className="name-location">
                  <div className="name">Cheese Burger</div>
                  <div className="location">
                  <img className="icon" src={icon} alt={icon}/>
                    <div className="text">Subway</div>
                  </div>
                </div>
                <div className="price">
                  <div className="div">$3.88</div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="text-2">Order Now</div>
            </button>
          </div>
          <div className="element-4">
            <div className="image-title">
              <div className="rectangle-wrapper">
                <img className="rectangle" alt="Rectangle" src={image} />
              </div>
              <div className="name-location-price">
                <div className="name-location">
                  <div className="name">Cheese Burger</div>
                  <div className="location">
                  <img className="icon" src={icon} />
                    <div className="text">Subway</div>
                  </div>
                </div>
                <div className="price">
                  <div className="div">$3.88</div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="text-2">Order Now</div>
            </button>
          </div>
        </div>
      );
    };

export default ComponentBuynow;