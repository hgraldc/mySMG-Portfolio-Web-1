import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/img/Sam Poo Kong.jpeg";
import Trip2 from "../assets/img/Masjid Agung Jawa Tengah.jpeg";
import Trip3 from "../assets/img/Brown Canyon.jpeg";

function Trip(){
    return(
        <div className="trip">
            <h1>Popular Destination</h1>
            <p>You can discover unique destinations</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Sam Poo Kong"
                    text="Sam Poo Kong adalah kelenteng bersejarah 
                    di Semarang yang menjadi simbol keberagaman dan 
                    toleransi. Bekas persinggahan Laksamana Cheng Ho ini 
                    menawarkan arsitektur khas Tiongkok, patung megah, dan suasana spiritual 
                    yang tenang. Destinasi ini menjadi tempat menarik untuk mengeksplorasi 
                    sejarah dan budaya Tionghoa di Semarang."
                />
                <TripData
                    image={Trip2}
                    heading="Masjid Agung Jawa Tengah"
                    text="Masjid Agung Jawa Tengah adalah masjid megah 
                    di Semarang yang memadukan arsitektur Jawa, Islam, dan Romawi. 
                    Dengan menara setinggi 99 meter dan payung elektrik ala Masjid Nabawi, 
                    masjid ini menjadi ikon religi dan destinasi wisata populer. Pengunjung dapat 
                    menikmati keindahan arsitektur, museum Islam, dan pemandangan kota dari puncak 
                    menara. Masjid ini menjadi tempat yang ideal untuk beribadah sekaligus berwisata 
                    di Semarang."
                />
                <TripData
                    image={Trip3}
                    heading="Brown Canyon"
                    text='Brown Canyon adalah destinasi wisata alam unik di Semarang yang dikenal sebagai 
                    "Grand Canyon"-nya Indonesia. Terbentuk dari bekas area tambang batu dan pasir selama 
                    puluhan tahun, Brown Canyon menawarkan pemandangan tebing-tebing tinggi yang menjulang, 
                    formasi batuan eksotis, dan lanskap yang dramatis. Tempat ini menjadi favorit bagi para pencinta 
                    fotografi dan petualang yang ingin menikmati keindahan alam yang tak biasa. Kunjungi Brown Canyon 
                    untuk pengalaman wisata alam yang menakjubkan di Semarang.'
                />
            </div>
        </div>
    )
}

export default Trip;