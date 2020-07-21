import React, { useEffect, useState } from 'react'
import PageTypeSearch from './PageTypeSearch/PageTypeSearch'
import ProductType from './ProductType/ProductType'
import './index.css'
export default function ChannelPageType(props) {
    const [ChannelPage, setChannelPage] = useState('')
    useEffect(() => {
        fetch(`http://localhost/${props.match.params.type}`)
            .then(res => res.json())
            .then(data => {
                setChannelPage({
                    ChannelPage: data
                })
            })
    }, [])
    console.log('+++++++++++')
    return (
        <div>
            {ChannelPage == ''?'加载':<div className='PageTypeSearchs'>
                <PageTypeSearch props={ChannelPage} />
                <ProductType props={ChannelPage} />
            </div>}
            
        </div>
    )
}
