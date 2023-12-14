import ProjectItem from "./ProjectItem"
import { projectData } from "../utils/projectData"

console.log(projectData)

function ProjectsList( { } ){
    
    const list = projectData.map(project => {
        return(
        <ProjectItem
            key={project.id} 
            data={project} 
        />
        )
    })

    return(
    <table><tbody><tr>
    {list}
    </tr></tbody></table>
    )
}

export default ProjectsList