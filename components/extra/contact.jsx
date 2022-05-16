
const Contact = () => {
    return (
        <div
            className="bg-white"
            style={{minHeight:"80vh"}}>
            <div
                className="container">
                <h2
                    className="text-center text-primary">
                    Kontak Kami
                </h2>
                <div
                    className="row">
                    <div
                        className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.00764067852!2d106.90953611431443!3d-6.645971566816424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8200e234e63%3A0xfdcd78dffabf1537!2sMegamendung%2C%20Cipayung%20Girang%2C%20Kec.%20Megamendung%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016770!5e0!3m2!1sid!2sid!4v1650942771271!5m2!1sid!2sid"
                            width={"100%"}
                            height={400}
                            style={{
                                border: 0
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div
                        className="col-md-6 shadow p-3 mb-5 bg-body rounded"
                        style={{
                            minHeight: "400px"
                        }}>
                        <div
                            className="form-group">
                            <label
                                htmlFor="name">
                                Nama
                            </label>
                            <input
                                type="text"
                                className="form-control bg-white"
                                id="name"
                                placeholder="Masukkan nama anda" />
                        </div>
                        <div
                            className="form-group">
                            <label
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control bg-white"
                                id="email"
                                placeholder="Masukkan email anda" />
                        </div>
                        <div
                            className="form-group">
                            <label
                                htmlFor="message">
                                Pesan
                            </label>
                            <textarea
                                className="form-control bg-white"
                                id="message"
                                rows="3"
                                placeholder="Masukkan pesan anda" />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary btn-block mt-4">
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;