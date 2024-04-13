import '../cssFiles/index.css'
import '../index.css';

import clock from '../assets/clock.svg';
export const StorePage = () => {
    const NumberOfItems = 10;
    const imageUrls = Array(NumberOfItems).fill('https://source.unsplash.com/random/400x300');
  
    // Function to change the image src attribute once it has loaded
    const handleImageLoaded = (event) => {
      event.target.src = event.target.getAttribute('data-src');
    };
  
    return (
      <div className='main-content'>
        <section className='StoreSection'>
          {imageUrls.map((url, index) => (
            <div className='StoreItemDiv' key={index}>
              {/* Initially display the clock SVG */}
              <img
                src={clock}
                data-src={`${url}&sig=${index}`}
                alt={`Store Item ${index}`}
                onLoad={handleImageLoaded}
                className='StoreItemImage'
              />
              <div className='price'>{`$${index}`}</div>
            </div>
          ))}
        </section>
      </div>
    );
  };