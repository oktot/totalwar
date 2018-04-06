import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {

    const AdsenseSponsorAds = buildAdsenseSponsorAds();
    const AdsenseSponsorAdsEnds = buildAdsenseSponsorAdsEnds();

        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor <br />
		<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
		{ process.env.NODE_ENV === 'production' ? AdsenseSponsorAds : null }
		{ process.env.NODE_ENV === 'production' ? AdsenseSponsorAdsEnds : null }
		</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about/'>Chip Chip & trà sữa Phú Quốc</a>
		<a href='/14102017/'>Ngày khai trương Trà Sữa Phú Quốc</a>
		<a href='/cogaituoi25/'>Giới thiệu về cô chủ Quán Trà Sữa</a>
		<a href='http://haboba.com'>Những địa điểm hẹn hò tại Phú Quốc</a>
		<a href='/payments/'>How to pay? Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua trà sữa online</a>
		</div>
            </div>
        );
    }
}

function buildAdsenseSponsorAds() {
  const js = `
  <!-- Sponsor Right Sidebar -->
<ins class='adsbygoogle'
     style='display:block'
     data-ad-client='ca-pub-4618835576956134'
     data-ad-slot='8665159676'
     data-ad-format='auto'></ins>
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

function buildAdsenseSponsorAdsEnds() {
  const js = `
  (adsbygoogle = window.adsbygoogle || []).push({});
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

export default SideBar
