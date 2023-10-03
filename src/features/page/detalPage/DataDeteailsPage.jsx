import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../../redux/dataSlice";
import NavBar from "../../components/navbar/NavBar";
import styles from "./dataDeteailsPage.module.css";
import SelectGrid from "../../custom/selects/SelectGrid";
import Img1 from "../../../assets/png/bina1.png";
import Img2 from "../../../assets/png/bina2.png";
import Img3 from "../../../assets/png/bina3.png";
import Img4 from "../../../assets/png/bina4.png";
import Img5 from "../../../assets/png/bina5.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
const responsive = {
  0: { items: 3 },
  568: { items: 5 },
  1024: { items: 8 },
};

const items = [
  <img src={Img1} alt="Bina" />,
  <img src={Img2} alt="Bina" />,
  <img src={Img3} alt="Bina" />,
  <img src={Img4} alt="Bina" />,
  <img src={Img5} alt="Bina" />,
  <img src={Img1} alt="Bina" />,
  <img src={Img2} alt="Bina" />,
  <img src={Img3} alt="Bina" />,
  <img src={Img4} alt="Bina" />,
  <img src={Img5} alt="Bina" />,
]
const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
      {item}
    </div>
  ));
};
const DataDeteailsPage = () => {

  const { dataId } = useParams();
  const { data, isFetching, isSuccess, error } = useGetDataQuery(dataId);
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));



  const RenderNextButton = () => {
    return <ImArrowRight className={styles.CursorRight} />
  };

  const RenderPrevButton = () => {
    return <ImArrowLeft className={styles.CursorLeft} />
  };
  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    } else {
      setThumbIndex(0);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    } else {
      setThumbIndex(thumbs.length - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === 'action') {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };
  let content;
  if (isFetching) {
    content = <div className="loader">Loading...</div>;
  } else if (isSuccess) {
    content = (
      <div className={`${styles.homePage_content}`}>
        <div className={`${styles.homePage_content_header}`}>
          <div className={`${styles.homePage_first_box}`}>
            <div className={`${styles.img_box}`}>
              <AliceCarousel
                activeIndex={mainIndex}
                animationType="fadeout"
                animationDuration={800}
                disableDotsControls
                disableButtonsControls
                items={items}
                mouseTracking={!thumbAnimation}
                onSlideChange={syncMainBeforeChange}
                onSlideChanged={syncMainAfterChange}
                touchTracking={!thumbAnimation}
                infinite
              />
              {/* <RenderPrevButton/>
            <RenderNextButton /> */}
              <div className={`${styles.prev_buttons}`}>
                <div onClick={slidePrev} >
                  <RenderPrevButton className="btn-next" />
                </div>
                <div onClick={slideNext}>
                  <RenderNextButton className="btn-prev" />
                </div>
              </div>
            </div>

            <div className={`${styles.homePage_content_right}`}>
              <h2>{data.description}</h2>
              <p className={`${styles.homePage_address}`}>
                <FaLocationDot />
                {data.address}</p>
              <p className={`${styles.homePage_rooms}`}>
                <MdMeetingRoom />
                {data.rooms}
                {" "}
                Otaqlı
              </p>
              <p className={`${styles.homePage_price}`}>
                Qiyməti: <span>{data.price}</span> AZN
              </p>
              <div className={`${styles.homePage_advertiser}`}>
                <div className={`${styles.advertiser_detail}`}>
                  <p>Elan Sahibi: Mülkiyyətçi</p>
                </div>
                <div className={`${styles.advertiser_profile}`}>
                  <button>Əlaqəyə Keç</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`homePage_second_box`}>
            <AliceCarousel
              activeIndex={thumbIndex}
              disableDotsControls
              disableButtonsControls
              items={thumbs}
              mouseTracking={false}
              onSlideChanged={syncThumbs}
              touchTracking={!mainAnimation}
              responsive={responsive}
              infinite
            />
          </div>
        </div>
        <div className={`${styles.additional_box}`}>
          <div className={`${styles.traits_description}`}>
            <h3>Əlavə Məlumat</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              quis itaque enim consequatur et ab error doloribus mollitia iusto?
              Quod asperiores maxime eius, non reiciendis aspernatur aliquam,
              ipsam iste placeat laboriosam repellendus. Velit odio non
              inventore pariatur itaque nisi iure! Harum quas beatae consectetur
              odit consequuntur, officia amet eligendi voluptates similique
              nobis minus voluptatum minima illum odio saepe nisi quae sequi
              ducimus error. Odit, possimus sequi deleniti ea harum nobis
              voluptate repellendus modi quod, voluptatibus exercitationem
              culpa, vel nulla placeat. Ratione molestias impedit cupiditate
              magnam animi nulla consequatur fugit inventore. Veniam iure sit ut
              sed explicabo consectetur ratione corporis praesentium?
            </p>
          </div>
          <div className={`${styles.traits_property}`}>


            <SelectGrid content={"Mülkiyətin Xususiyyətləri"} data={data} />

          </div>
        </div>

      </div>
    );
  } else if (error) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />
      {content}
    </div>
  );
};

export default DataDeteailsPage;
