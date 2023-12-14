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
    <>
    <h2>My Projects</h2>
    <table><tbody><tr>
    {list}
    </tr></tbody></table>
    </>
    )
}

export default ProjectsList