import React from 'react'
import Header from '../Fragments/Home/Header'
import { homeData } from '../../service/_data'
import ArticleHome from '../Fragments/Home/ArticleHome'
import Experience from '../Fragments/Home/Experience'
import Tech from '../Fragments/Home/Tech'

const Home = () => {
    return (
        <div className='dark:text-white mb-10'>
            <Header
                title={homeData.title}
                description={homeData.description}
                showList={true}
                showDonate={true}
            />
            <hr className='mt-6' />
            <ArticleHome />
            <hr className='mt-6' />
            <Experience />
            <hr className='mt-6' />
            <Tech />
        </div>
    )
}

export default Home