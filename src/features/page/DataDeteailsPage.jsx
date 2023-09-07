import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDataQuery } from '../redux/dataSlice'

const DataDeteailsPage = () => {
    const { dataId } = useParams()
    const { data, isFetching, isSuccess, error } = useGetDataQuery(dataId)
    let content
    if (isFetching) {
        content = <div className="loader">Loading...</div>
    } else if (isSuccess) {
        content = (
            <div>
                <h2>{data.price}</h2>
                <p className="post-content">{data.address.substring(0, 100)}</p>
                <p>{data.date}</p>
            </div>
        )
    } else if (error) {
        content = <div>{error}</div>
    }



    return (
        <div>DataDeteailsPage
            {content}
        </div>
    )
}

export default DataDeteailsPage