import React from "react"
import MarketStatsCard from "./MarketStatsCard"


const MarketStats = () => {

    const marketStatsList = [
        {
            svgCode: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 17.5V13.5C12.5 12.9477 12.0523 12.5 11.5 12.5H8.5C7.94772 12.5 7.5 12.9477 7.5 13.5V17.5" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.33337 9.16669V14.3334C3.33337 16.219 3.33337 17.1618 3.91916 17.7476C4.50495 18.3334 5.44775 18.3334 7.33337 18.3334H12.6667C14.5523 18.3334 15.4951 18.3334 16.0809 17.7476C16.6667 17.1618 16.6667 16.219 16.6667 14.3334V9.16669" stroke="#2752E7" stroke-width="1.5" />
                                <path d="M3.11161 3.96471C3.30735 3.26007 3.40522 2.90774 3.67344 2.70387C3.94166 2.5 4.30732 2.5 5.03865 2.5H14.9613C15.6926 2.5 16.0583 2.5 16.3265 2.70387C16.5947 2.90774 16.6926 3.26007 16.8883 3.96471L17.8955 7.59079C17.9727 7.8685 18.0113 8.00735 18.0165 8.11965C18.0393 8.60352 17.712 9.03414 17.2397 9.1417C17.1301 9.16667 16.986 9.16667 16.6977 9.16667H16.5491C16.3073 9.16667 16.1864 9.16667 16.0802 9.15529C15.2787 9.06944 14.607 8.51074 14.3766 7.73821C14.3461 7.63586 14.3241 7.517 14.2801 7.27929V7.27929C14.2687 7.21784 14.263 7.18711 14.2589 7.17723C14.2246 7.09539 14.1087 7.09539 14.0744 7.17723C14.0702 7.18711 14.0646 7.21784 14.0532 7.27929L13.9987 7.57339C13.8277 8.49673 13.0223 9.16667 12.0833 9.16667V9.16667C11.1443 9.16667 10.3389 8.49673 10.1679 7.57339L10.1134 7.27929C10.102 7.21784 10.0963 7.18711 10.0922 7.17723C10.0579 7.09539 9.94198 7.09539 9.90772 7.17723C9.90358 7.18711 9.89789 7.21784 9.88651 7.27929L9.83205 7.57339C9.66106 8.49673 8.85567 9.16667 7.91663 9.16667V9.16667C6.97758 9.16667 6.17219 8.49673 6.0012 7.57339L5.94674 7.27929C5.93536 7.21784 5.92967 7.18711 5.92553 7.17723C5.89127 7.09539 5.77532 7.09539 5.74105 7.17723C5.73691 7.18711 5.73122 7.21784 5.71984 7.27929V7.27929C5.67582 7.517 5.65381 7.63586 5.62329 7.73821C5.39292 8.51074 4.72126 9.06944 3.91969 9.15529C3.8135 9.16667 3.69262 9.16667 3.45087 9.16667H3.30217C3.01395 9.16667 2.86984 9.16667 2.76022 9.1417C2.2879 9.03414 1.9606 8.60352 1.98337 8.11965C1.98866 8.00735 2.02723 7.8685 2.10437 7.59079L3.11161 3.96471Z" stroke="#2752E7" stroke-width="1.5" />
                            </svg>`,
            title: 'Market cap',
            value: '$723.6 billion',
        },
        {
            svgCode: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66663 8.33331L6.66663 13.3333" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 10V13.3333" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.3334 6.66669V13.3334" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="#2752E7" stroke-width="1.5" />
                                </svg>`,
            title: 'Volume',
            value: '$35.6 billion',
        },
        {
            svgCode: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66671 2.5L3.33337 5.83333M3.33337 5.83333L6.66671 9.16667M3.33337 5.83333L12.6667 5.83333C14.8758 5.83333 16.6667 7.62419 16.6667 9.83333L16.6667 10.8333" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.3333 17.5L16.6666 14.1667M16.6666 14.1667L13.3333 10.8333M16.6666 14.1667L7.33329 14.1667C5.12415 14.1667 3.33329 12.3758 3.33329 10.1667L3.33329 9.16667" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>`,
            title: 'Circulating supply',
            value: '$19 billion',
        },
        {
            svgCode: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 17.5H2.5" stroke="#2752E7" stroke-width="2" stroke-linecap="round" />
                                    <path d="M3.33337 13.3334V11.6667" stroke="#2752E7" stroke-width="2" stroke-linecap="round" />
                                    <path d="M10 10V7.5" stroke="#2752E7" stroke-width="2" stroke-linecap="round" />
                                    <path d="M6.66663 13.3333V8.33331" stroke="#2752E7" stroke-width="2" stroke-linecap="round" />
                                    <path d="M13.3334 10.8334V9.16669" stroke="#2752E7" stroke-width="2" stroke-linecap="round" />
                                    <path d="M16.6666 12.5V4.16669" stroke="#2752E7" stroke-width="2" stroke-linecap="round" />
                                </svg>`,
            title: 'Trading activity',
            value: '$36.6% sell',
        },
        {
            svgCode: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="10" cy="11.6667" rx="6.66667" ry="6.66667" stroke="#2752E7" stroke-width="1.5" />
                                    <path d="M3.33329 3.33331L1.66663 4.99998" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M16.6667 3.33331L18.3334 4.99998" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M7.5 10.5L10.3093 12.3729C10.4172 12.4448 10.5622 12.4223 10.6432 12.321L12.5 10" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" />
                                </svg>`,
            title: 'Typical hold time',
            value: '53 days',
        },
        {
            svgCode: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00004 14.6666L2.01308 7.18294C1.68056 6.76729 1.5143 6.55947 1.46963 6.30901C1.42496 6.05856 1.50912 5.80607 1.67745 5.30109L2.08834 4.0684C2.52836 2.74836 2.74836 2.08834 3.27214 1.71083C3.79591 1.33331 4.49163 1.33331 5.88308 1.33331H10.117C11.5084 1.33331 12.2042 1.33331 12.7279 1.71083C13.2517 2.08834 13.4717 2.74836 13.9117 4.0684L14.3226 5.30109C14.491 5.80607 14.5751 6.05856 14.5305 6.30901C14.4858 6.55947 14.3195 6.76729 13.987 7.18294L8.00004 14.6666ZM8.00004 14.6666L10.9167 5.49998M8.00004 14.6666L5.08337 5.49998M14.25 6.33331L10.9167 5.49998M10.9167 5.49998L9.66671 2.16665M10.9167 5.49998H5.08337M6.33337 2.16665L5.08337 5.49998M5.08337 5.49998L1.75004 6.33331" stroke="#2752E7" stroke-width="1.5" stroke-linecap="round" />
                                </svg>`,
            title: 'Popularity on Coinbase',
            value: '#1',
        },


    ]

    return (
        <>
            <div className="flex flex-col gap-[12px]">
                <div className="font-bold text-[18px]">Market stats</div>
                <div className="flex flex-col gap-[18px] text-[16px]">
                    {
                        marketStatsList.map((item, index) => {
                            return (
                                <>
                                    <MarketStatsCard svgCode={item.svgCode} title={item.title} value={item.value} />
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MarketStats;