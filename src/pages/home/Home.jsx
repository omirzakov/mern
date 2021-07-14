import React from 'react'
import Chart from '../../components/chart/Chart'
import ChartUser from '../../components/chart/ChartUser'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import TopSales from '../topSales/TopSales'
import './home.css'

function Home() {

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart />
            <TopSales />
        </div>
    )
}
export default Home;