import { GifItem } from "./GifItem";
import { useFetchGift } from "../hooks/useFetchGift";


export const GifGrid = ({ category }) => {


    const {images, isLoading} = useFetchGift( category );
 
    return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && (<h2> cargando...</h2>)

        }
        
        
        <div className='card-grid' >
        {
            images.map(image => {
                return <GifItem key = {image.id} {...image}/>
            })
            
        }
        </div>
        
        
    </>
    )
}