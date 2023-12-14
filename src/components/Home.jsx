import { useState } from 'react'
import Intro from './Intro'
import ProjectsList from './ProjectsList'

function Home() {
    console.log('Hello there!')

    return(
        <>
        <Intro />
        <ProjectsList />
        </> 

    )

}

export default Home