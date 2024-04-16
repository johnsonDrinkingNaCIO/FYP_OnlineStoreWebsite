import "./PicGallery.css";

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
export default function PicGallery() {
    const pics = [
        {
            
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {  
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {  
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];

    return (
        <ImageGallery items={pics}></ImageGallery>
    )
}