import React from "react";

const MarketStatsCard = (props) => {
    const { svgCode, title, value } = props;
    return (
        <>
            <div className="flex justify-between items-center h-[40px]">
                <div className="flex gap-[16px] items-center justify-center">
                    <div dangerouslySetInnerHTML={{ __html: svgCode }} />
                    <div className="tracking-wide">{title}</div>
                </div>
                <div className="flex items-center">
                    <div className="tracking-wide font-medium">{value}</div>
                </div>
            </div>
        </>
    )
}

export default MarketStatsCard;