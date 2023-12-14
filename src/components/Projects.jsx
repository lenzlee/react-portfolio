function Projects({data}) {
    const { name, img, description } = data
    console.log('hello', data)
    
    return(
        <>
         <td>
            <img src={img} />
            <h3>{name}</h3>
            <p>{description}</p>
            </td>
        </> 
    )

}

export default Projects