import React, { useState, useEffect } from 'react'
import { useGetDatasQuery } from '../../redux/dataSlice'
import NavBar from '../../components/navbar/NavBar';
import styles from './homePage.module.css'
import DataExcerptBox from '../../components/dataExcerptBox/DataExcerptBox';
import SelectOptions from '../../custom/selectOptions/SelectOptions';


const selectOptions1 = [
    {
        id: 1,
        content: "Alış"
    }
    ,
    {
        id: 2,
        content: "Satış"
    }]
const personData = [
    {
        id: 1,
        content: "Mənzil"
    }
    ,
    {
        id: 2,
        content: "Yeni Tikli",
    },
    {
        id: 3,
        content: "Köhnə Tikili"
    },
    {
        id: 4,
        content: "Həyət Ev / Bağ Evi"
    },
    {
        id: 5,
        content: "Ofis"
    },
    {
        id: 6,
        content: "Torpaq"
    },
    {
        id: 7,
        content: "Qaraj"
    },
    {
        id: 8,
        content: "Obyekt"
    },
    {
        id: 9,
        content: "Torpaq"
    }
]

const roomsCount = [
    {
        id: 1,
        content: "1"
    },
    {
        id: 2,
        content: "2"
    },
    {
        id: 3,
        content: "3"
    },
    {
        id: 4,
        content: "4"
    },
    {
        id: 5,
        content: "5 və daha çox"
    }
]
const cityData = [
    {
        id: 1,
        content: "Bakı"
    },
    {
        id: 2,
        content: "Gəncə"
    },
    {
        id: 3,
        content: "Sumqayıt"
    },
    {
        id: 4,
        content: "Lənkəran"
    },
    {
        id: 5,
        content: "Mingəçevir"
    },
    {
        id: 6,
        content: "Şirvan"
    },
    {
        id: 7,
        content: "Naxçıvan"
    },
    {
        id: 8,
        content: "Şəki"
    },
    {
        id: 9,
        content: "Yevlax"
    },
    {
        id: 10,
        content: "Quba"
    },
    {
        id: 11,
        content: "Bərdə"
    },
    {
        id: 12,
        content: "Xaçmaz"
    },
    {
        id: 13,
        content: "İmişli"
    },
    {
        id: 14,
        content: "Ağdaş"
    },
    {
        id: 15,
        content: "Qazax"
    },
    {
        id: 16,
        content: "Goranboy"
    },
    {
        id: 17,
        content: "Ağcabədi"
    },
    {
        id: 18,
        content: "Qax"
    },
    {
        id: 19,
        content: "Tovuz"
    },
    {
        id: 20,
        content: "Biləsuvar"
    },
    {
        id: 21,
        content: "Xocalı"
    },
    {
        id: 22,
        content: "Qobustan"
    },
    {
        id: 23,
        content: "Qusar"
    },
    {
        id: 24,
        content: "Balakən"
    },
    {
        id: 25,
        content: "Zaqatala"
    },
    {
        id: 26,
        content: "Şabran"
    },
    {
        id: 27,
        content: "Oğuz"
    },
    {
        id: 28,
        content: "Şəmkir"
    },
    {
        id: 29,
        content: "Ağsu"
    },
    {
        id: 30,
        content: "Xırdalan"
    },
    {
        id: 31,
        content: "Astara"
    },
]

const HomePage = () => {
    const [page, setPage] = useState(0)
    const { data, isLoading, isFetching, isSuccess, isError, error } = useGetDatasQuery(page);
    let copyData ;
    const [select, setSelect] = useState({})
    const [filter, setFilter] = useState({})
    function isObjectEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }


    let content;
    if (isObjectEmpty(select)) {
        if (isLoading) {
            content = <div className="loader">Loading...</div>
        } else if (isSuccess) {
            copyData = data
            const renderedDatas = data?.map(data => <DataExcerptBox key={data.id} data={data} />)
            content = <div className={`${styles.home_content}`}>{renderedDatas}</div>
        } else if (isError) {
            content = <div>{error.toString()}</div>
        }
    } else {
        
        if (isLoading) {
            content = <div className="loader">Loading...</div>
        } else if (isSuccess) {
            copyData = data
         
        } else if (isError) {
            content = <div>{error.toString()}</div>
        }
        if (filter?.condition) {
            copyData = copyData?.filter(item => item.condition == filter?.condition)
        }
        if (filter?.person) {
            copyData = copyData?.filter(item => item.person == filter?.person)
        }
        if (filter?.rooms) {
            filter?.rooms == "5 və daha çox" ? copyData = copyData?.filter(item => item.rooms >= 5) : copyData = copyData?.filter(item => item.rooms == filter?.rooms)
        }
        if (filter?.city) {
            copyData = copyData?.filter(item => item.city == filter?.city)
        }
        const renderedDatas = copyData?.map(data => <DataExcerptBox key={data.id} data={data} />)
        content = <div className={`${styles.home_content}`}>{renderedDatas}</div>

    }




    const handleTypeChange = (e) => {
        setSelect({ ...select, condition: e })
    }
    const handlePersonChange = (e) => {
        setSelect({ ...select, person: e })
    }
    const handleRoomsChange = (e) => {
        setSelect({ ...select, rooms: e })
    }
    const handleCityChange = (e) => {
        setSelect({ ...select, city: e })
    }

    useEffect(() => {
        setFilter(select)
        console.log(copyData)
    }
        , [select])
    return (
        <div>
            <NavBar />

            <div className={`${styles.HomePage_content}`}>
                <div className={`${styles.HomePage_searchBox}`}>
                    <h3>Axtarış Et</h3>
                    <div>
                        <SelectOptions data={selectOptions1} number="11" onChange={handleTypeChange} defoult={"Alış"} />
                        <SelectOptions data={personData} number="12" onChange={handlePersonChange} defoult={"Mənzil"} />
                        <SelectOptions data={roomsCount} number="13" onChange={handleRoomsChange} defoult={"Otaq Sayı"} />
                        <SelectOptions data={cityData} number="14" onChange={handleCityChange} defoult={"Şəhər"} />
                    </div>
                </div>
                {content}
            </div>
        </div>
    )
}

export default HomePage