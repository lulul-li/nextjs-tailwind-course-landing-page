import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


export function ExchangeTable() {
    const data = [
        {
            label: "USDT",
            value: "USDT",
            desc: [
                {flag: '🇺🇸', name: '美元', rate: '1.00'},
                {flag: '🇪🇺', name: '歐元', rate: '0.9129'},
                {flag: '🇬🇧', name: '英鎊', rate: '0.7849'},
                {flag: '🇯🇵', name: '日圓', rate: '147.09'},
                {flag: '🇨🇦', name: '加元', rate: '1.3725'},
                {flag: '🇨🇳', name: '人民幣', rate: '7.27'},
                {flag: '🇦🇺', name: '澳元', rate: '1.6662'},
                {flag: '🇰🇷', name: '韓元', rate: '1377.27'},
                {flag: '🇸🇬', name: '新加坡元', rate: '1.3259'},
                {flag: '🇭🇰', name: '港幣', rate: '7.77'}
            ],
        },
        {
            label: "台幣",
            value: "ntd",
            desc: [
                {flag: '🇺🇸', name: '美元', rate: '0.031'},
                {flag: '🇪🇺', name: '歐元', rate: '0.0283'},
                {flag: '🇬🇧', name: '英鎊', rate: '0.0243'},
                {flag: '🇯🇵', name: '日圓', rate: '4.54'},
                {flag: '🇨🇦', name: '加元', rate: '0.042'},
                {flag: '🇨🇳', name: '人民幣', rate: '0.23'},
                {flag: '🇦🇺', name: '澳元', rate: '0.048'},
                {flag: '🇰🇷', name: '韓元', rate: '42.50'},
                {flag: '🇸🇬', name: '新加坡元', rate: '0.044'},
                {flag: '🇭🇰', name: '港幣', rate: '0.28'}
            ],
        },

    ];
    return (
        <Tabs value="USDT" orientation="vertical">
            <TabsHeader className="w-40">
                {data.map(({label, value}) => (
                    <Tab key={value} value={value} className="place-items-start">
                        <div className="flex items-center gap-2">
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({value, desc}) => (
                    <TabPanel key={value} value={value} className="py-0">
                        {desc.map((currency, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '10px 0',
                                borderBottom: '1px solid #ddd'
                            }}>
                                <span style={{display: 'flex', alignItems: 'center'}}>
                                    <span>{currency.flag}</span>
                                    <span style={{marginLeft: '10px'}}>{currency.name}</span>
                                </span>
                                <span>{currency.rate}</span>
                            </div>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
