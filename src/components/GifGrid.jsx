import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ catgory }) => {

    const { images, isLoading } = useFetchGifs(catgory)

    return (
        <>
            <h3>{catgory}</h3>
            {
                isLoading && <h2>...Cargando</h2>
            }
            <div className='card-grid'>
                {images.map((images) => (
                    <GifItem
                        key={images.id}
                        {...images}
                    />
                ))
                }
            </div>
        </>
    )
}

