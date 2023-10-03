import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./addProdact.module.css";
import SelectOptions from "../../custom/selectOptions/SelectOptions";
import CustomInput from "../../custom/input/CustomInput";

const personData = [
  {
    id: 1,
    content: "Mənzil"
  },
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

const conditionData = [
  {
    id: 1,
    content: "Satıram"
  },
  {
    id: 2,
    content: "Kirayə verirəm",
  },
]

const AddProdact = () => {
  const [symbol, setSymbol] = useState(3000)
  const [imgList, setImgList] = useState([])
  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArr = Array.prototype.slice.call(files);
    setImgList([...imgList, ...filesArr])
  }

  return (
    <div>
      <NavBar />
      <div className={`${styles.AddProdact_container}`}>
        <h1>Yeni Elan</h1>
        <div className={`${styles.AddProdact_content}`}>
          <div className={`${styles.AddProdact_inputs}`}>
            <div className={`${styles.person_box}`}>
              <div>
                <label>
                  Mən <span>*</span>
                </label>
                <SelectOptions data={personData} number='1' />
              </div>
              <div>
                <SelectOptions data={conditionData} number="2" />
              </div>
            </div>
            <div className={`${styles.cityLocation_box}`}>
              <label>
                Şəhər <span>*</span>
              </label>
              <SelectOptions data={null} number='3' />
            </div>
            <div className={`${styles.area_box}`}>
              <label htmlFor="areaInput">
                Sahə<span>*</span>
              </label>
              <CustomInput data="Sahə" />
            </div>
            <div className={`${styles.addition_infomation}`}>
              <label htmlFor="addition_infomation">
                Əlavə məlumatlar
              </label>
              <div>
                <textarea name="addition_infomation" id="addition_infomation"
                  maxLength={3000}
                  onChange={(e) => {
                    setSymbol(3000 - e.target.value.length)
                  }
                  }
                />
                <span>{symbol} qalib</span>
              </div>
            </div>
            <div className={`${styles.price_box}`}>
              <label htmlFor="priceInput">
                Qiymət<span>*</span>
              </label>
              <CustomInput data="Qiymət" />
            </div>
            <div className={`${styles.location_box}`}>
              <label htmlFor="locationInput">
                Rayon<span>*</span>
              </label>
              <input type="text" name="locationInput" id="locationInput" />
            </div>
            <div className={`${styles.addImg_box}`}>
              <label htmlFor="addImgInput">
                Şəkillər<span>*</span>
              </label>
              <div>
                <input type="file" name="addImgInput" id="addImgInput" multiple
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
               <div className={`${styles.imgListBox}`}>
               {
                  imgList.length > 0 ? (imgList.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={URL.createObjectURL(item)} alt="" />
                      </div>
                    )
                  })) : null
                }
               </div>
                <ul>
                  <li>
                    Şəkillərin minimal sayı — 4 ədəd
                  </li>
                  <li>
                    Binanın birinci mərtəbədən başlamaqla tam şəklinin olması mütləqdir
                  </li>
                  <li>
                    Şəkillərin optimal ölçüləri — 800 x 600 pikseldir
                  </li>
                </ul>
                
              </div>
            </div>
            <div className={`${styles.relevantPerson_box}`}>
              <label htmlFor="relevantPersonInput">
                Əlaqədar şəxs<span>*</span>
              </label>
              <div>
                <CustomInput data="Ad Soyad" />
                <div className={`${styles.radioBox}`}>
                  <input type="radio" name="radioBox" id="radioBox" />
                  <label htmlFor="radioBox">
                    Öz elanımı yerləşdirirəm
                  </label>
                </div>
                <div className={`${styles.radioBox}`}>
                  <input type="radio" name="radioBox" id="radioBox2" />
                  <label htmlFor="radioBox2">
                    Mən vasitəçiyəm (agent)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.AddProdact_regulations}`}>
            <ul>
              <li>
                Bir ay ərzində eyni nömrədən 1 pulsuz (təkrar olmayan) elan
                yerləşdirmək olar. Elanı başqa bir elanla əvəz etmək qadağandır.
                Saytda artıq mövcud olan daşınmaz əmlakın təkrarən
                yerləşdirilməsi yalnız ödənişli əsaslarla mümkündür. Bununla
                belə, bir istifadəçi eyni daşınmaz əmlak obyektini yalnız bir
                dəfə yerləşdirə bilər.
              </li>
              <li>
                Əgər siz 1 ay ərzində 2 və daha artıq elan yerləşdirmək
                istəsəniz, hər növbəti elanın qiyməti - 5 AZN olacaq.
              </li>
              <li>
                Elanlar vaxtından əvvəl silinsə də, nömrə üçün nəzərdə tutulmuş
                ödənişsiz yer, elan dərc ediləndən 30 gün sonra bərpa edilir.
              </li>
              <li>
                bina.az saytında istifadə etdiyiniz ödənişli xidmətlər üçün
                nəzərdə tutulan məbləğ geri qaytarılmır.
              </li>
              <li>
                Zəhmət olmasa elanı yerləşdirən zaman əlaqə vasitələrini
                (telefon nömrəsi, e-mail ünvanını) düzgün qeyd edin. Telefon
                nömrəsi ilə bağlı heç bir dəyişiklik həyata keçirilmir.
              </li>
              <li>
                Elanınızla bağlı bütün məlumatlar sizin e-mail ünvanınıza
                göndərilir.
              </li>
              <li>
                Əmlakın təsvirində məlumatları böyük hərflərlə yazmaq, həmçinin
                telefon nömrəsi, e-mail ünvanı və şirkət haqqında xidmətləri
                yazmaq qadağandır.
              </li>
              <li>
                Əmlakın fasad (günorta vaxtı çəkilmiş) və otaq şəkilləri mütləq
                olmalıdır.
              </li>
              <li>
                Üzərində bina.az saytı da daxil olmaqla digər saytların
                loqotipləri olan şəkillər qəbul edilməyəcək.
              </li>
              <li>
                Qiymət tam qeyd edilməlidir. (Qiyməti ilkin ödəniş və ya 1 sot,
                1 m² üçün yazmaq olmaz)
              </li>
              <li>Ünvanı xəritədə dəqiq göstərməyiniz vacibdir.</li>
              <li>
                Fərqli vasitəçi və şirkətlər eyni elanı ödənişli yerləşdirə
                bilərlər.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProdact;
