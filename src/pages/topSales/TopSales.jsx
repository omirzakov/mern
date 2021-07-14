import React from 'react';
import './style.css';
import TopSalesList from './TopSalesList';


const TopSales = () => {


    return (
        <div className='topSales'>
            <div className='topSalesWrapper'>
                <h3 className='topSalesTitle'>Top sales</h3>
                <TopSalesList />
            </div>
        </div>
    );
}
export default TopSales;