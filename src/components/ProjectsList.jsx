import Projects from "../components/Projects"
import { projectData } from "../utils/projectData"

console.log(projectData)

function ProjectsList( { } ){
    
    const list = projectData.map(project => {
        return(
        <Projects
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