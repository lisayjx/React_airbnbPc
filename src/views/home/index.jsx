import React, { memo,useEffect } from 'react'
import YXRequest from '@/services'

const Home = memo(() => {

  useEffect(()=>{
    YXRequest.get({url:'/home/highscore'}).then(res=>{
      console.log(res,'res');
    })
  },[])

  return (
    <div>home</div>
  )
})

export default Home