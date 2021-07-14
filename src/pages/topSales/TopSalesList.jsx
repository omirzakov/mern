import React from 'react';
import Popup from 'reactjs-popup';
import Chart from '../../components/chart/Chart';
import ChartUser from '../../components/chart/ChartUser';
import './style.css';


const TopSalesList = () => {


    return (
        <div className='topSalesList'>
            {
                Array(6).fill('data').map((item, i) => (
                    <Popup trigger={<div className='topSalesItem'> Madiyar Umirzakov {i} </div>} position='right center' on={['hover', 'focus']}>
                        <div className='chartDetail'>
                            <Chart data={`Madiyar Umirzakov ${i}`} />
                        </div>
                    </Popup>
                ))
            }
        </div>
    )
}
export default TopSalesList;