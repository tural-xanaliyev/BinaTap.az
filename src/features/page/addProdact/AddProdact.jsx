import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./addProdact.module.css";
import SelectOptions from "../../custom/selectOptions/SelectOptions";
import CustomInput from "../../custom/input/CustomInput";
import { useAddNewDataMutation } from "../../redux/dataSlice";
import { useNavigate } from "react-router-dom";
const personData = [
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
const rayonData = [
  {
    id: 1,
    content: "Abşeron"
  },
  {
    id: 2,
    content: "Binəqədi",
  },
  {
    id: 3,
    content: "Xətai"
  },
  {
    id: 4,
    content: "Xəzər"
  },
  {
    id: 5,
    content: "Qaradağ"
  },
  {
    id: 6,
    content: "Nərimanov"
  },
  {
    id: 7,
    content: "Nizami"
  },
  {
    id: 8,
    content: "Pirallahı"
  },
  {
    id: 9,
    content: "Sabunçu"
  },
  {
    id: 10,
    content: "Səbail"
  },
  {
    id: 11,
    content: "Suraxanı"
  },
  {
    id: 12,
    content: "Yasamal"
  },
]

const reparType = [
  {
    id: 1,
    content: "Təmirli"
  },
  {
    id: 2,
    content: "Təmirsiz"
  }
]
const timeData = [
  {
    id: 1,
    content: "Gündəlik"
  },
  {
    id: 2,
    content: "Həftəlik"
  },
  {
    id: 3,
    content: "Aylıq"
  },
  {
    id: 4,
    content: "İllik"
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
const AddProdact = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    person: '',
    condition: '',
    cityLocation: '',
    area: '',
    addition_infomation: '',
    price: '',
    location: '',
    relevantPerson: '',
    email: '',
    phone: ''
  })
  const [symbol, setSymbol] = useState(3000)
  const [imgList, setImgList] = useState([])
  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArr = Array.prototype.slice.call(files);
    setImgList([...imgList, ...filesArr])
    setData({ ...data, imgList: [...imgList, ...filesArr] })
  }

  const handlePersonChange = (e) => {
    setData({ ...data, person: e })
    console.log(data)
  }
  const handleConditionChange = (e) => {
    setData({ ...data, condition: e })
    console.log(data)
  }
  const handleCityLocationChange = (e) => {
    setData({ ...data, city: e })
    console.log(data)
  }
  const handleAreaChange = (e) => {
    setData({ ...data, address: e })
    console.log(data)
  }
  const handleReparChange = (e) => {
    setData({ ...data, repar: e })
    console.log(data)
  }
  const handleTimeChange = (e) => {
    setData({ ...data, time: e })
    console.log(data)
  }
  const countRomms = (e) => {
    setData({ ...data, rooms: e })
    console.log(data)
  }
  const areaChange = (e) => {
    setData({ ...data, area: e })
    console.log(data)
  }
  const priceChange = (e) => {
    setData({ ...data, price: e })
    console.log(data)
  }
  const locationChange = (e) => {
    setData({ ...data, location: e })
    console.log(data)
  }
  const relevantPersonChange = (e) => {
    setData({ ...data, relevantPerson: e })
    console.log(data)
  }
  const emailChange = (e) => {
    setData({ ...data, email: e })
    console.log(data)
  }
  const phoneChange = (e) => {
    setData({ ...data, phone: e })
    console.log(data)
  }
  const floorChange = (e) => {
    setData({ ...data, floor: e })
    console.log(data)
  }
  const personName = (e) => {
    setData({ ...data, personName: e })
    console.log(data)
  }
  const [addNewData, { isLoading }] = useAddNewDataMutation()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addNewData(data)
      navigate('/')
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <NavBar />
      <div className={`${styles.AddProdact_container}`}>
        <h1>Yeni Elan</h1>
        <div className={`${styles.AddProdact_content}`}>
          {isLoading ? <h1>Loading...</h1> : (
            <form className={`${styles.AddProdact_inputs}`} onSubmit={handleSubmit}>
              <div className={`${styles.person_box}`}>
                <div>
                  <label>
                    Mən <span>*</span>
                  </label>
                  <SelectOptions data={personData} number='1' onChange={handlePersonChange} />
                </div>
                <div>
                  <SelectOptions data={conditionData} number="2" onChange={handleConditionChange} />
                </div>
              </div>
              <div className={`${styles.cityLocation_box}`}>
                <label>
                  Şəhər <span>*</span>
                </label>
                <SelectOptions data={cityData} number='3' onChange={handleCityLocationChange} />
              </div>
              {
                data.person === "Ofis" ? (
                  <div>
                    <label htmlFor="locationInput">
                      Ofis növü<span>*</span>
                    </label>
                    <div>
                      <div className={`${styles.radioBox}`}>
                        <input type="radio" name="radioBox1" id="radioBox3" />
                        <label htmlFor="radioBox3">
                          Biznes mərkəzi
                        </label>
                      </div>
                      <div className={`${styles.radioBox}`}>
                        <input type="radio" name="radioBox1" id="radioBox4" />
                        <label htmlFor="radioBox4">
                          Ev / Mənzil
                        </label>
                      </div>
                      <div className={`${styles.radioBox}`}>
                        <input type="radio" name="radioBox1" id="radioBox5" />
                        <label htmlFor="radioBox5">
                          Villa
                        </label>
                      </div>
                    </div>
                  </div>) : null
              }
              {
                data.person === 'Yeni Tikli' || data.person === "Köhnə Tikili" || data.person === "Həyət Ev / Bağ Evi" ? (
                  <div>
                    <label htmlFor="roms">
                      Otaq sayı<span>*</span>
                    </label>
                    <CustomInput data="Otaq sayı" type="number" onChanges={countRomms} />
                  </div>) : null
              }
              <div className={`${styles.area_box}`}>
                <label htmlFor="areaInput">
                  Sahə<span>*</span>
                </label>
                <CustomInput data="Sahə" onChanges={areaChange} type="number" />
              </div>
              {
                data.person === 'Yeni Tikli' || data.person === "Köhnə Tikili" ? (
                  <div>
                    <label htmlFor="floor">
                      Mərtəbə<span>*</span>
                    </label>
                    <CustomInput data="Mərtəbə" type="number"
                      onChanges={floorChange}
                    />
                  </div>
                ) : null
              }
              {
                data.person === 'Yeni Tikli' || data.person === "Köhnə Tikili" ? (
                  <div>
                    <label htmlFor="floor">
                      Mərtəbə sayı<span>*</span>
                    </label>
                    <CustomInput data="Mərtəbə sayı" type="number" onChanges={floorChange} />
                  </div>
                ) : null
              }
              <div className={`${styles.addition_infomation}`}>
                <label htmlFor="addition_infomation">
                  Əlavə məlumatlar
                </label>
                <div>
                  <textarea name="addition_infomation" id="addition_infomation"
                    maxLength={3000}
                    onChange={(e) => {
                      setSymbol(3000 - e.target.value.length)
                      setData({ ...data, description: e.target.value })
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
                <CustomInput data="Qiymət" onChanges={priceChange} type="number" />
                {
                  data.condition === "Satıram" ? (
                    <div className={`${styles.checkContainer}`}>
                      <div className="checkBox">
                        <input type="checkbox" name="checkBox" id="checkBox" onChange={(e) => {
                          setData({ ...data, extractBox: e.target.checked })
                        }} />
                        <label htmlFor="checkBox">
                          Çıxarış var
                        </label>
                      </div>
                      <div className="checkBox">
                        <input type="checkbox" name="checkBox" id="checkBox2" onChange={(e) => {
                          setData({ ...data, ipotekaBox: e.target.checked })
                        }} />
                        <label htmlFor="checkBox2">
                          İpoteka var
                        </label>
                      </div>
                    </div>

                  ) : null
                }
                {
                  data.condition === "Kirayə verirəm" ? (
                    <SelectOptions data={timeData} number="9" onChange={handleTimeChange} />
                  ) : null
                }
              </div>
              {
                data.person === 'Yeni Tikli' || data.person === "Köhnə Tikili" || data.person === "Həyət Ev / Bağ Evi" || data.person === "Ofis" || data.person === "Obyekt" ? (
                  <div>
                    <label htmlFor="locationInput">
                      Təmir<span>*</span>
                    </label>
                    <SelectOptions data={reparType} number="10" onChange={handleReparChange} />
                  </div>) : null
              }
              <div className={`${styles.location_box}`}>
                <label htmlFor="locationInput">
                  Rayon<span>*</span>
                </label>
                <SelectOptions data={rayonData} number='4' onChange={handleAreaChange} />
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
                  <CustomInput data="Ad Soyad" onChanges={personName} type="text" />
                  <div className={`${styles.radioBox}`}>
                    <input type="radio" name="radioBox" id="radioBox" onChange={(e) => {
                      setData({ ...data, relevantPerson: "Öz elanımı yerləşdirirəm" })
                    }} />
                    <label htmlFor="radioBox">
                      Öz elanımı yerləşdirirəm
                    </label>
                  </div>
                  <div className={`${styles.radioBox}`}>
                    <input type="radio" name="radioBox" id="radioBox2" onChange={(e) => {
                      setData({ ...data, relevantPerson: "Mən vasitəçiyəm" })
                    }} />
                    <label htmlFor="radioBox2">
                      Mən vasitəçiyəm (agent)
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email">Email<span>*</span></label>
                <CustomInput data="Sayıtda göstərilmir" type="email" onChanges={emailChange} />
              </div>
              <div>
                <label htmlFor="phone">Telefon<span>*</span></label>
                <CustomInput data="(___) ___-__-__" type="tel" onChanges={phoneChange} />
              </div>
              <div className={`${styles.form_submit}`}>
                <span>Elan yerləşdirərək, Siz bina.az-ın İstifadəçi razılaşması ilə razı olduğunuzu təsdiq edirsiniz.</span>
                <button>Elanı yerləşdir</button>
              </div>
            </form>
          )}
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
