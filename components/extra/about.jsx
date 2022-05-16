import { useState, useEffect } from "react";
import AboutCard from "../large/aboutCard";

const About = () => {
    const [win, setWin] = useState([]);
    useEffect(() => {
        if(typeof window !== "undefined"){
            setWin(window);
        }
    }, []);

    return (
        <section
            className={`bg-white ${win.innerWidth <= 800 ? "pt-3 pb-3":""}`}
            style={{
                minHeight:"80vh"
            }}>
            <div
                className="container">
                <h2
                    className="text-primary text-center">
                    Tentang Megamendung Digital
                    </h2>
                <br />
                <div
                    id="about"
                    className="row align-items-start">
                    <div
                        className="col-md-6">
                        <p
                            className={`lead text-muted ${win.innerWidth < 800 ? "text-start":"text-end"}`}>
                            Megamendung Digital adalah aplikasi desa digital yang dikembangkan oleh Desa Digital Megamendung. Dengan aplikasi ini, diharapkan para pengunjung atau warga setempat dapat mengakses fasilitas - fasilitas yang tersedia dengan mudah dan cepat. Diharapkan pula aplikasi ini menjadi media informasi yang bermanfaat bagi para pengunjung.
                            </p>
                        <p
                            className={`lead text-muted ${win.innerWidth < 800 ? "text-start":"text-end"}`}>
                            Sasaran utama aplikasi ini adalah para pengunjung atau wisatawan serta penduduk setempat agar bisa mendapatkan kemudahan dalam mengakses fasilitas desa. Aplikasi ini juga dapat digunakan oleh para petugas desa untuk mengelola fasilitas desa.
                            </p>
                        </div>
                    <div
                        className="col-md-6">
                        <h2 className="text-primary">
                            Fasilitas Tersedia
                            </h2>
                        <br />
                        <div className="row">
                            <AboutCard
                                name="Pendidikan" />
                            <AboutCard
                                name="UMKM" />
                            <AboutCard
                                name="Pariwisata" />
                            <AboutCard
                                name="Hotel Dan Villa" />
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default About;