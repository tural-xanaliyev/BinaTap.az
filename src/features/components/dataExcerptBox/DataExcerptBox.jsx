import React, { useState } from 'react'
import styles from './dataExcerptBox.module.css'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import Img from '../../../assets/png/bina1.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImArrowRight, ImArrowLeft } from "react-icons/im";


const DataExcerptBox = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleDragStart = (e) => e.preventDefault();
    const imgs = [
        <img src={Img} alt="Bina" onDragStart={handleDragStart} />,
        <img src={Img} alt="Bina" onDragStart={handleDragStart} />,
        <img src={Img} alt="Bina" onDragStart={handleDragStart} />,
        <img src={Img} alt="Bina" onDragStart={handleDragStart} />,
        <img src={Img} alt="Bina" onDragStart={handleDragStart} />,
    ]
    const renderNextButton = () => {
        return <ImArrowRight className={styles.CursorRight} />
    };

    const renderPrevButton = () => {
        return <ImArrowLeft className={styles.CursorLeft} />
    };
    return (
        <article className={`${styles.post_excerpt}`}
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
                    items={imgs}
                    disableDotsControls
                    renderNextButton={renderNextButton}
                    renderPrevButton={renderPrevButton}
                    autoWidth
                    infinite
                />
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