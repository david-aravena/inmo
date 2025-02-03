"use client"
import { useState } from 'react';
import AnimatedInput from 'src/components/animatedInput/'

export default function SectionProjects({styles}){
  const [project, setProject] = useState({
    name:"",
    properties:[]
  })

  const getInputs = (value, attribute) => {
    setProject({...project, [attribute]: value})
  }

  const getNewProperty = (value, attribute) => {
    setProject({...project, properties:[...project.properties, {[attribute]: value}]})
  }

  return(
    <>
      <div className={styles.sectionProject}>
        <AnimatedInput nameInput={"name"} textInput={"Nombre proyecto"} value={project.name} onChange={(value) => getInputs(value, "name")} />
      </div>

      <div className={styles.sectionProject}>
        <div>
          <AnimatedInput nameInput={"price"} textInput={"Valor"} value={project?.name} onChange={(value) => getNewProperty(value, "price")} />
        </div>
      </div>
    </>
  )
}