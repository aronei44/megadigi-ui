import Layout from "../../../components/extra/dashboard/layout"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/index"
import axios from "axios"
import callAPI from "../../../config/api"

const BtnContainer = ({
    active,
    setActive,
    min,
    max,
    sendData,
    error,
}) => {
    return (
        <div
            className="container d-flex justify-content-end mt-2">
            <button 
                className="btn btn-success"
                onClick={()=>setActive(active-1)}
                hidden={active === min}>
                Sebelumnya
            </button>
            <button 
                className="btn btn-warning"
                onClick={()=>setActive(active+1)}
                hidden={active === max}>
                Selanjutnya
            </button>
            <button 
                className={`btn btn-warning ms-2 ${error ? 'disabled':''}`}
                onClick={()=>sendData()}
                disabled={error}>
                Kirim
            </button>
        </div>
    )
}
const TabsContainer = ({active, setActive}) => {
    return (

        <ul 
            className="nav nav-tabs">
            <li 
                className="nav-item"
                onClick={()=>setActive(1)}>
                <a 
                    className={`nav-link ${active === 1 ? 'active':''}`} 
                    href="#">
                    Informasi UMKM
                </a>
            </li>
            <li 
                className="nav-item"
                onClick={()=>setActive(2)}>
                <a 
                    className={`nav-link ${active === 2 ? 'active':''}`} 
                    href="#">
                    Alamat
                </a>
            </li>
        </ul>
    )
}
const FirstTab = ({
    nama,
    setNama,
    bidang,
    setBidang,
    noKontak,
    setNoKontak,
    deskripsi,
    setDeskripsi,
}) => {
    return (
        <div
            className="container mt-5">
            <div
                className="form-group mt-2">
                <label>Nama UMKM</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nama UMKM"
                    value={nama}
                    onChange={e=>setNama(e.target.value)}
                    required/>
            </div>
            <div
                className="form-group mt-2">
                <label>Bidang Usaha</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Bidang Usaha"
                    value={bidang}
                    onChange={e=>setBidang(e.target.value)}
                    required/>
            </div>
            <div
                className="form-group mt-2">
                <label>No Kontak</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="No Kontak"
                    value={noKontak}
                    onChange={e=>setNoKontak(e.target.value)}
                    onKeyUp={e=>{
                        e.target.value=e.target.value.replace(/[^\d]/,'')
                        setNoKontak(e.target.value)
                        }}
                    onKeyDown={e=>{
                        e.target.value=e.target.value.replace(/[^\d]/,'')
                        setNoKontak(e.target.value)
                        }}
                    required/>
            </div>
            <div
                className="form-group mt-2">
                <label>Deskripsi</label>
                <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Deskripsi"
                    onChange={e=>setDeskripsi(e.target.value)}
                    required>{deskripsi}
                </textarea>
            </div>    
        </div>
    )
}
const SecondTab = ({
    allProvinsi,
    allKabupaten,
    setProvinsi,
    setKabupaten,
    setProvinsiId,
    setKabupatenId,
    kecamatan,
    setKecamatan,
    desa,
    setDesa,
    alamat,
    setAlamat,
}) => {
    return (
        <div
            className="container mt-5">
            <div
                className="form-group mt-2">
                <label>Provinsi</label>
                <select 
                    className="form-control"
                    onChange={e=>{
                        setProvinsi(e.target.value.split("|")[1])
                        setProvinsiId(e.target.value.split("|")[0])
                    }}>
                    {allProvinsi.map((provinsi,index)=>{
                        return (
                            <option 
                                key={index}
                                value={`${provinsi.province_id}|${provinsi.province}`}>
                                {provinsi.province}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div
                className="form-group mt-2">
                <label>Kabupaten</label>
                <select
                    className="form-control"
                    onChange={e=>{
                        setKabupaten(e.target.value.split("|")[1])
                        setKabupatenId(e.target.value.split("|")[0])
                    }}>
                    {allKabupaten.map((kabupaten,index)=>{
                        return (
                            <option 
                                key={index}
                                value={`${kabupaten.city_id}|${kabupaten.type} ${kabupaten.city_name}`}>
                                {kabupaten.type} {kabupaten.city_name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div
                className="form-group mt-2">
                <label>Kecamatan</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Kecamatan"
                    value={kecamatan}
                    onChange={e=>setKecamatan(e.target.value)}
                    required/>
            </div>
            <div
                className="form-group mt-2">
                <label>Desa</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Desa"
                    value={desa}
                    onChange={e=>setDesa(e.target.value)}
                    required/>
            </div>
            <div
                className="form-group mt-2">
                <label>Alamat</label>
                <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Alamat Lengkap"
                    onChange={e=>setAlamat(e.target.value)}
                    required>
                    {alamat}
                </textarea>
            </div>
        </div>
    )
}


const BuatUmkm = () => {
    const { umkm } = useContext(UserContext)
    const [active, setActive] = useState(1)
    const [min, max] = [1, 2]
    useEffect(() => {
        if(typeof window !== "undefined"){
            if(umkm !== null){
                window.location.href = "/dashboard/umkm/edit"
            }
        }
    }, [umkm])
    const [nama, setNama] = useState("")
    const [bidang, setBidang] = useState("")
    const [noKontak, setNoKontak] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [allProvinsi, setAllProvinsi] = useState([])
    const [allKabupaten, setAllKabupaten] = useState([])
    const [provinsi, setProvinsi] = useState(null)
    const [kabupaten, setKabupaten] = useState(null)
    const [provinsiId, setProvinsiId] = useState(null)
    const [kabupatenId, setKabupatenId] = useState(null)
    const [kecamatan, setKecamatan] = useState('')
    const [desa, setDesa] = useState('')
    const [alamat, setAlamat] = useState('')
    const [error, setError] = useState(true)
    const getProvinsi = async () => {
        const { data, status } = await callAPI({
            path: "/province",
            method: "GET"
        })
        if(status === 200){
            setAllProvinsi(data.data)
            setProvinsi(data.data[0].province)
            setProvinsiId(data.data[0].province_id)
        }
    }
    const getKabupaten = async (provinsi) => {
        const { data, status } = await callAPI({
            path: `/city/${provinsi}`,
            method: "GET"
        })
        if(status === 200){
            setAllKabupaten(data.data)
            setKabupaten(`${data.data[0].type} ${data.data[0].city_name}`)
            setKabupatenId(data.data[0].city_id)
        }
    }
    useEffect(() => {
        getProvinsi()
    }, [])
    useEffect(() => {
        if(provinsiId !== null){
            getKabupaten(provinsiId)
        }
    }, [provinsiId])
    useEffect(() => {
        if( nama !== "" && 
            bidang !== "" && 
            noKontak !== "" && 
            noKontak.length < 15 && 
            noKontak.length >= 10 && 
            deskripsi !== "" && 
            provinsi !== null && 
            kabupaten !== null && 
            kecamatan !== "" && 
            desa !== "" && 
            alamat !== ""){
            setError(false)
        }else{
            setError(true)
        }
    }, [nama, bidang, noKontak, deskripsi, provinsi, kabupaten, kecamatan, desa, alamat])
    const sendData = async () => {
        const tempData = {
            nama,
            provinsi,
            provinsi_id: provinsiId,
            kabupaten,
            kabupaten_id: kabupatenId,
            kecamatan,
            // kecamatan_id: kecamatan,
            desa,
            // desa_id: desa,
            alamat,
            deskripsi,
            bidang_usaha: bidang,
            no_hp: noKontak
        }
        console.log(tempData)
        const { data, status } = await callAPI({
            path: "/umkm",
            method: "POST",
            data: tempData,
            token: localStorage.getItem("token")
        })
        console.log(data)
        if(status === 201){
            alert("Berhasil menambahkan umkm")
            window.location.href = "/dashboard/umkm"
        } else if (status === 422){
            alert("Anda sudah punya umkm")
        } else {
            alert("Gagal menambahkan umkm")
        }
    }
    return (
        <Layout>
            <TabsContainer 
                active={active} 
                setActive={setActive}/>
            <div
                className="tab-content">
                <div
                    className={`tab-pane fade show ${active === 1 ? 'active':''}`}
                    id="tab-1">
                    <FirstTab
                        nama={nama}
                        setNama={setNama}
                        bidang={bidang}
                        setBidang={setBidang}
                        noKontak={noKontak}
                        setNoKontak={setNoKontak}
                        deskripsi={deskripsi}
                        setDeskripsi={setDeskripsi}
                    />
                </div>
                <div
                    className={`tab-pane fade show ${active === 2 ? 'active':''}`}
                    id="tab-2">
                    <SecondTab
                        allProvinsi={allProvinsi}
                        allKabupaten={allKabupaten}
                        setProvinsi={setProvinsi}
                        setKabupaten={setKabupaten}
                        setProvinsiId={setProvinsiId}
                        setKabupatenId={setKabupatenId}
                        kecamatan={kecamatan}
                        setKecamatan={setKecamatan}
                        desa={desa}
                        setDesa={setDesa}
                        alamat={alamat}
                        setAlamat={setAlamat}
                    />
                </div>
            </div>
            <BtnContainer 
                active={active} 
                setActive={setActive} 
                min={min} 
                max={max} 
                sendData={sendData}
                error={error} />
        </Layout>   
    )
}

export default BuatUmkm