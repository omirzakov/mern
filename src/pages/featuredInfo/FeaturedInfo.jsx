import React from 'react';
import { ArrowDownward } from '@material-ui/icons';
import './featuredinfo.css';

function FeaturedInfo() {

    return (
        <div className='featured'>
            <div className="featuredItem">
                <div className="featuredTitle">Revanue</div>
                <div className='featuredMoneyContainer'>
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward/></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <div className="featuredTitle">Revanue</div>
                <div className='featuredMoneyContainer'>
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward/></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <div className="featuredTitle">Revanue</div>
                <div className='featuredMoneyContainer'>
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward/></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    );
}
export default FeaturedInfo;