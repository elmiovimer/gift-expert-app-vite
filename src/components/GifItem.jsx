
export const GifItem = ({ title, url }) => {
    
  return (
    <>
        {/* <div>GifItem</div> */}
        <div className="card" 
            key={ title }>
                <img src={url} alt={title}/>
                <p>{title}</p>
        </div>
    </>
  )
}
