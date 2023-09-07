import React, { useMemo } from 'react'
import { useGetDatasQuery } from '../redux/dataSlice'
import { Link } from 'react-router-dom'

let DataExcerpt = ({ data }) => {
    return (
        <article className="post-excerpt">
            <h2>{data.price}</h2>
            <p className="post-content">{data.address.substring(0, 100)}</p>
            <p>{data.date}</p>
            <Link to={`/datas/${data.id}`} className="button muted-button"> Posta Bax</Link>
        </article>
    )
}


const HomePage = () => {
    const { data: datas = [], isLoading, isFetching, isSuccess, isError, error } = useGetDatasQuery()
    const sortedDatas = useMemo(() => {
        const sortedPosts = datas.slice();
        sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
        return sortedPosts;
    })

    let content;

    if (isLoading) {
        content = <div className="loader">Loading...</div>
    } else if (isSuccess) {
        const renderedDatas = sortedDatas.map(data => <DataExcerpt key={data.id} data={data} />)
        content = <div>{renderedDatas}</div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <div>HomePage
            {content}
        </div>
    )
}

export default HomePage