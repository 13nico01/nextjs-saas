import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Exlorer'
          topic='Neural Network'
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='123'
          name='Countsy the number wizard'
          topic='Derivatives'
          subject='science'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard
          id='125'
          name='Verba the vocabluray Builder'
          topic='language'
          subject='English'
          duration={30}
          color='#BDE7FF'
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title='Recenty completed sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page