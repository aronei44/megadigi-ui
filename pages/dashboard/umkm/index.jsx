import Layout from "../../../components/extra/dashboard/layout";
import Link from "next/link";

const Table = () => {
    return (
        <div 
            className="row">
            <div 
                className="col-md-8">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>Nama UMKM</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>Kampung</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>RT</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>RW</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>Desa</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>Alamat Lengkap</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>Bidang Usaha</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>Deskripsi</td>
                            <td>Nama UMKM</td>
                        </tr>
                        <tr>
                            <td>No Kontak</td>
                            <td>Nama UMKM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div 
                className="col-md-4">
                <div
                    className="card">
                    <div
                        className="card-header bg-primary text-white">
                        <h5 className="card-title">
                            Edit UMKM
                        </h5>
                    </div>
                    <div
                        className="card-body">
                        <p className="card-text">
                            Edit informasi UMKM anda
                        </p>
                        <Link
                            href="#">
                            <a
                                className="btn btn-primary container-fluid">
                                Edit
                            </a>
                        </Link>
                    </div>
                </div>
                <div
                    className="card mt-3">
                    <div
                        className="card-header bg-danger text-white">
                        <h5 className="card-title">
                            Hapus UMKM
                        </h5>
                    </div>
                    <div
                        className="card-body">
                        <p className="card-text">
                            Hapus UMKM Anda
                        </p>
                        <button 
                            className="btn btn-danger container-fluid">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Index = () => {
    return (
        <Layout>
            <h2>UMKM</h2>
            <hr />
            {/* <Table /> */}
            <div 
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                    height:"80%"
                }}>
                <p>
                    Anda Belum Memiliki UMKM
                </p>
                <Link
                    href="/dashboard/umkm/buat">
                    <a
                        className="btn btn-primary">
                        Buat UMKM
                    </a>
                </Link>
            </div>
        </Layout>
    );
}

export default Index;