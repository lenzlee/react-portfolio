import { useState } from "react"

function ProjectItem({data}) {
    const { name, img, description } = data
    console.log('hello',data)
    
    return(
        <>

         <td>
            <img src={img} />
            <h3>{name}</h3>
            <div class="description"><p>{description}</p></div>
            </td>
        
        </> 
    )

}

export default ProjectItem