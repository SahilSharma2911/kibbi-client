import Resume from '@/components/Resume/Resume'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Resume />
    </Suspense>
  )
}

export default Page