import React from 'react'
import './MostPopular.css'
import { Card } from '../../components/index'
import popular_01 from '../../assets/images/popular-01.jpg'
import popular_02 from '../../assets/images/popular-02.jpg'
import popular_03 from '../../assets/images/popular-03.jpg'
import popular_04 from '../../assets/images/popular-04.jpg'
import popular_05 from '../../assets/images/popular-05.jpg'
import popular_06 from '../../assets/images/popular-06.jpg'
import popular_07 from '../../assets/images/popular-07.jpg'
import popular_08 from '../../assets/images/popular-08.jpg'

import {SectionHeader} from '../../components/index'



const MostPopular = () => {
  return (
    <>
    <div className='section-wrapper'>
     <SectionHeader>Most Popular</SectionHeader>
        <div className='most-popular-items'>
        <Card title='Fortnite' category='Sandbox' rate='3.6' download='2M' image={popular_01} />
        <Card title='CallOFDuty' category='Stream-X'  rate='2.6' download='3.6M' image={popular_02}/>
        <Card title='PubG' category='Legendary'  rate='4.3' download='4.1M' image={popular_03}/>
        <Card title='CS-Go' category='Battle S'  rate='5' download='7M' image={popular_04}/>
        <Card title='MinCraft' category='Legendary' rate='2.6' download='1M' image={popular_05} />
        <Card title='Eagles Fly' category='Matrix'  rate='1.6' download='4.6M' image={popular_06}/>
        <Card title='PubG' category='Legendary'  rate='2.3' download='5.1M' image={popular_07}/>
        <Card title='Data2' category='Battle S'  rate='1' download='1M' image={popular_08}/>
        </div>
        </div>
    </>
  )
}

export default MostPopular
