import React from "react";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../redux/dataSlice";
import NavBar from "../components/navbar/NavBar";
import styles from "./dataDeteailsPage.module.css";
import SelectGrid from "../custom/selects/SelectGrid";
const DataDeteailsPage = () => {
  const { dataId } = useParams();
  const { data, isFetching, isSuccess, error } = useGetDataQuery(dataId);
  let content;
  if (isFetching) {
    content = <div className="loader">Loading...</div>;
  } else if (isSuccess) {
    content = (
      <div className={`${styles.homePage_content}`}>
        <div className={`${styles.homePage_content_header}`}>
          <img src={data.img} alt="Home" />
          <div>
            <h2>{data.description}</h2>
            <p className={`${styles.homePage_address}`}>{data.address}</p>
            <p className={`${styles.homePage_rooms}`}>{data.rooms}</p>
            <p className={`${styles.homePage_price}`}>
              Qiyməti: <span>{data.price}</span> AZN
            </p>
            <div className={`${styles.homePage_advertiser}`}>
              <div className={`${styles.advertiser_detail}`}>
                <p>Elan Sahibi</p>
                <span>mülkiyyətçi</span>
              </div>
              <div className={`${styles.advertiser_profile}`}>
                <button>Əlaqəyə Keç</button>
              </div>
            </div>
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
            

            <SelectGrid content={"Mülkiyətin Xususiyyətləri"} datas={data} />

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
