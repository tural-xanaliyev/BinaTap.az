import React, { useState } from 'react'
import styles from './dataExcerptBox.module.css'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import Img1 from '../../../assets/png/bina1.png';
import Img2 from '../../../assets/png/bina2.png';
import Img3 from '../../../assets/png/bina3.png';
import Img4 from '../../../assets/png/bina4.png';
import Img5 from '../../../assets/png/bina5.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImArrowRight, ImArrowLeft } from "react-icons/im";


const DataExcerptBox = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const imgs = [
        <img src={Img1} alt="Bina" data-value="1" width="500px"/>,
        <img src={Img2} alt="Bina" data-value="2" />,
        <img src={Img3} alt="Bina" data-value="3" />,
        <img src={Img4} alt="Bina" data-value="4" />,
        <img src={Img5} alt="Bina" data-value="5" />,
    ]

    const carousel = React.createRef();
    const renderNextButton = () => {
        return <ImArrowRight className={styles.CursorRight} />
    };

    const renderPrevButton = () => {
        return <ImArrowLeft className={styles.CursorLeft} />
    };
    return (
        <article className={`${styles.post_excerpt} single_data`}
        onClick={(e) => {
            e.preventDefault()
            console.log(e.target)
            if (e.target.tagName.toLowerCase() !== 'svg' && e.target.tagName.toLowerCase() !== 'path') {
                window.location.href = `/datas/${data.id}`
            }
        }
        }
        >
            <div className={`${styles.post_img_box}`}>
                <AliceCarousel
                    key="carousel"
                    mouseTracking
                    items={imgs}
                    disableButtonsControls
                    disableDotsControls
                    ref={carousel}
                    infinite
                />
                <button onClick={(e) => carousel?.current?.slideNext(e)}>
                    <ImArrowRight className={styles.CursorRight} />
                </button>
                <button onClick={(e) => carousel?.current?.slidePrev(e)}>
                    <ImArrowLeft className={styles.CursorLeft} />
                </button>
            </div>
            <div className={`${styles.post_excerpt_box}`}>
                <div className={`${styles.header_content}`}>
                    <h2>{data.price} AZN</h2>
                    <HiHeart
                        className={`${styles.lice_icon} ${isFavorite ? `${styles.active}` : ''}`}
                        onClick={(e) => {
                            setIsFavorite(false)
                        }} />
                    <HiOutlineHeart
                        className={`${styles.lice_icon} ${isFavorite ? `${styles.disabled}` : ''}`}
                        onClick={(e) => {
                            setIsFavorite(true)
                        }} />
                </div>
                <div className={`${styles.address_box}`}>
                    <p className={`${styles.post_content}`}>{data.address.substring(0, 100)}</p>
                </div>
                <div className={`${styles.add_date_box}`}>
                    <span>{data.date}</span>
                </div>
                {/* <Link to={`/datas/${data.id}`} className="button muted-button"> Posta Bax</Link> */}
            </div>
        </article>
    )
}

export default DataExcerptBox