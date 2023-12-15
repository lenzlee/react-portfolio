import { useState } from "react"

function ProjectItem({data}) {
    const { name, img, url, description } = data
    console.log('hello',data)
    
    return(
        <>

         <td>
            <a href={url} title="Launch App"><img title="Click to Launch App" alt="Launch App" class="projectItem" src={img} /></a>
            <h3>{name}</h3>
            <div class="description">
                <p>{description}</p>
                <button class="cta" value="Launch App" title="LaunchApp"><a title="Launch App" href={url} target="_blank">Launch the {name} App</a></button>
            </div>
            </td>
        
        </> 
    )

}

export default ProjectItem