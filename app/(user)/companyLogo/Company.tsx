import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
    <div>
        <div className="max-w-[1320px] mx-auto py-[100px] grid grid-cols-2 md:grid-cols-4 gap-10">
            <Image src="/images/logoipsum-logo-1.png" alt='logo1' width={226} height={60}/>
            <Image src="/images/logoipsum-logo-3.png" alt='logo1' width={226} height={60}/>
            <Image src="/images/logoipsum-logo-6.png" alt='logo1' width={226} height={60}/>
            <Image src="/images/logoipsum-logo-7.png" alt='logo1' width={226} height={60}/>
        </div>
    </div>
  )
}

export default Company