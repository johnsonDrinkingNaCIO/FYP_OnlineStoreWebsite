import { useRef, useState } from "react";
import "./Card.css";



function CardBody({children,picUrl })
{   
    const [open,setOpen] = useState(0);
    const cardInfo= useRef(null);
    const cardBody= useRef(null);

    function showMore()
    {
      setOpen(
        ()=>{
          cardInfo.current.style.width=!open ? "80%":"0%";
          cardBody.current.style.width=!open ? "80%":"280px";

          return !open
        }
      )
    }

    return(
        <div className="VerticalCard"  ref={cardBody} >
            <div className="VerticalCardLeftInfo flex" >
              <div className="cardBox">
                <img src={picUrl}></img>
                </div>
                {children}
                
                <button onClick={showMore} className="ShowMoreBtn">{open?"SHOW LESS":"SHOW MORE"}</button> 
          </div>

          <div className="FullInfoDiv"  ref={cardInfo}>

            <div className="VerticalCardFullInfo">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quidem, ipsum obcaecati eos blanditiis error minus praesentium quis, dolorem sit ducimus atque. Commodi quas dolor fugit quis accusantium excepturi soluta? Officia voluptatum tenetur ex provident quisquam sint debitis nihil nemo, vel ducimus porro sequi ratione sit expedita qui quod eum eveniet illo voluptatem, explicabo cumque? Accusamus earum alias similique laudantium corporis expedita quibusdam possimus hic? Sed placeat ullam pariatur aliquid maxime recusandae corrupti? Nulla, saepe eos? In voluptatibus iste quia dignissimos harum eum, rerum tempora accusamus mollitia minus praesentium eligendi aperiam voluptas sequi qui sapiente officia vitae distinctio? Ipsum eaque quae quasi sit labore eligendi repudiandae natus quidem perspiciatis corporis, velit voluptatem quo illo, earum tempora eveniet quisquam porro tempore similique odio illum, nesciunt pariatur. Fugit praesentium soluta quos officia dicta quaerat accusantium excepturi voluptatem quas consequatur perspiciatis quidem porro enim magnam delectus alias fugiat autem esse dignissimos similique, corrupti voluptatum eligendi maiores cupiditate! Quo provident minus reprehenderit eligendi non aliquam suscipit dolorum delectus numquam deleniti quaerat, voluptates reiciendis perspiciatis amet culpa necessitatibus, blanditiis omnis quasi enim quisquam officiis veritatis aperiam odit. Placeat beatae officia libero animi soluta corrupti possimus nihil, sed, commodi a nisi dolorum nam quis aut recusandae.
              </div>

              <div className="flex">
                <button className="flex-item">Add</button>
                <input className="display" disabled></input>
                <button className="flex-item">Sub</button>
                <button className="AddToCartBtn flex-item">ADD TO CART</button> 
            </div>

          </div>

        </div>
    )
}

export default CardBody;