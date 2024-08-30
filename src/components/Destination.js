import LawangSewu1 from "../assets/img/Lawang Sewu1.jpeg"
import LawangSewu2 from "../assets/img/Lawang Sewu4.jpeg"
import KotaLama1 from "../assets/img/Kota Lama 3.jpeg"
import KotaLama2 from "../assets/img/kota lama 2.jpeg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Iconic Destinations</h1>
            <p>Tour give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationData
                className="first-des"
                heading="Lawang Sewu"
                text='Lawang Sewu: Ikon Semarang yang Penuh Misteri
                Lawang Sewu, yang berarti "Seribu Pintu," adalah 
                ikon terkenal di Semarang yang memikat dengan arsitektur megah 
                bergaya kolonial dan nuansa misteriusnya. Bekas kantor perusahaan kereta api Belanda 
                ini menawarkan pengalaman bersejarah di lorong-lorongnya yang penuh cerita. 
                Destinasi ini wajib dikunjungi untuk menikmati keindahan arsitektur dan suasana unik 
                di tengah kota Semarang.'
                img1={LawangSewu1}
                img2={LawangSewu2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Kota Lama"
                text='Kota Lama Semarang menawarkan pesona masa kolonial dengan arsitektur bangunan Belanda 
                yang megah dan terawat. Salah satu ikonik kawasan ini adalah Gereja Blenduk, dikelilingi oleh 
                kafe bergaya vintage, butik unik, dan galeri seni. Nikmati suasana klasik yang memikat, spot-spot Instagrammable, 
                serta cerita sejarah yang hidup di setiap sudutnya. Kota Lama adalah destinasi sempurna untuk merasakan romantisme 
                masa lampau di tengah kota Semarang.'
                img1={KotaLama1}
                img2={KotaLama2}
            />
        </div>
    )
}

export default Destination;