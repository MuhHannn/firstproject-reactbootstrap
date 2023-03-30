import App from "../App"
import Hero from "./Hero"
import Jurusan from "./Jurusan"
import Navigation from "./Navigation"
import Kegiatan from "./Kegiatan"
import Card1 from "./../assets/Card1.jpg"
import Card2 from "./../assets/Card2.jpg"
import Card3 from "./../assets/Card3.jpg"
import kegiatan1 from "./../assets/Kegiatan1.png"
import kegiatan2 from "./../assets/Kegiatan2.jpg"
import kegiatan3 from "./../assets/Kegiatan3.png"
import kegiatan4 from "./../assets/Kegiatan4.png"
import kegiatan5 from "./../assets/Kegiatan5.png"
const Main = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <Jurusan image={Card1} judul="Tata Boga" />
                        </div>
                        <div className="col-4">
                            <Jurusan image={Card2} judul="Perpustakaan" />
                        </div>
                        <div className="col-4">
                            <Jurusan image={Card3} judul="Seni" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Kegiatan Sekolah</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Kegiatan image={kegiatan1} deskripsi="Sepak Bola"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={kegiatan2} deskripsi="Renang"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={kegiatan3} deskripsi="Bersepeda"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={kegiatan4} deskripsi="Jogging"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={kegiatan5} deskripsi="Mini Soccer"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main