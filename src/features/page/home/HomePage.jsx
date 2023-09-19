import React, { useState } from 'react'
import { useGetDatasQuery } from '../../redux/dataSlice'
import NavBar from '../../components/navbar/NavBar';
import styles from './homePage.module.css'
import DataExcerptBox from '../../components/dataExcerptBox/DataExcerptBox';



const HomePage = () => {
    const [page, setPage] = useState(0)
    const { data, isLoading, isFetching, isSuccess, isError, error } = useGetDatasQuery(page)
    let content;

    if (isLoading) {
        content = <div className="loader">Loading...</div>
    } else if (isSuccess) {
        const renderedDatas = data?.map(data => <DataExcerptBox key={data.id} data={data} />)
        content = <div>{renderedDatas}</div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }





    return (
        <div>
            <NavBar />
            {/* <VList style={{ height: 800 }}> */}
                <div className={`${styles.HomePage_content}`}>
                    {content}
                </div>
            {/* </VList> */}
        </div>
    )
}

export default HomePage