import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcepts from './coreConcepts/CoreConcepts'

const CoreConcept = () => {
  return (
    <>
         <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS?.map(coreConceptItem=>
              <CoreConcepts key={coreConceptItem?.title} {...coreConceptItem}/>
            )}
            {/* <CoreConcepts
              image={CORE_CONCEPTS[0]?.image}
              title={CORE_CONCEPTS[0]?.title}
              description={CORE_CONCEPTS[0]?.description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
    </>
  )
}

export default CoreConcept