import '../cssFiles/index.css'

export const StorePage=() =>
{
    const NumberOfItems=10;



    const imageUrls= Array(NumberOfItems).fill('https://source.unsplash.com/random/400x300');
    return(
      
        <div className='main-content' >
           <section className='StoreSection'>            
                {imageUrls.map((url,index)=>(
                    <div className='StoreItemDiv' key={index}>
                    <img src={url+'&'+index}></img>
                    <div className='price'> {index} </div>
                    </div>
                ))}
                </section> 
       
        </div>
    )
};