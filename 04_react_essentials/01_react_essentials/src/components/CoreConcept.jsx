import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcepts from './coreConcepts/CoreConcepts'
import Section from './Section'

const CoreConcept = () => {
  return (
    <>
         <Section id="core-concepts" title="Time to get started!">
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
        </Section>
    </>
  )
}

export default CoreConcept