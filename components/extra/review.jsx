import Image from "next/dist/client/image";
import { useState, useEffect } from "react";
import callAPI from "../../config/api";

const Review = () => {
    const [score, setScore] = useState(5);
    const [star, setStar] = useState([]);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    useEffect(() => {
        let minus = 5 - score;

        let star = [];
        for (let i = 0; i < score; i++) {
            star.push(1);
        }
        for (let i = 0; i < minus; i++) {
            star.push(0);
        }
        setStar(star);
    }, [score]);
    const getReviews = async() => {
        const data = await callAPI({
            method: "GET",
            path: "/review",
            token: localStorage.getItem("token"),
        })
        if(data.status === 200) {
            setMessage(data.data.data.comment);
            setScore(data.data.data.star);
            setStatus(true);
        }
    }
    useEffect(() => {
        getReviews();
    }, []);
    const storeReview = async() => {
        if (message.length > 0) {
            const data = await callAPI({
                path: "/review",
                method: "POST",
                data : {
                    star:score,
                    comment:message
                },
                token: localStorage.getItem('token')
            })
            setMessage(data.data.review.comment)
            setScore(data.data.review.star)
            setStatus(true);
        } else {
            alert("Please enter a message!");
        }
    }
    return (
        <div
            className="bg-white"
            style={{minHeight:"80vh"}}>
            <div
                className="container">
                <h2
                    className="text-center text-primary">
                    Tambahkan Review
                </h2>
                <div
                    className="row">
                    <div
                        className="col-md-6">
                        <Image
                            src="/img/review.jpg"
                            alt="review"
                            className="img-fluid"
                            width={500}
                            height={400} />
                    </div>
                    <div
                        className="col-md-6 shadow p-3 mb-5 bg-body rounded"
                        style={{
                            height: "400px"
                        }} >
                        <div
                            className="form-group">
                            <p>Nilai
                            </p>
                                {star.map((item, index) => {
                                    return (
                                        <span
                                            className={`fa fa-star pointer ${item === 1 ? 'checked' : ''}`}
                                            key={index}
                                            onClick={() => {
                                                if(!status){
                                                    setScore(index + 1);
                                                }
                                            }}
                                            />
                                    )}
                                )}
                            <span className="ms-1">- {score}/5</span>
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
                                onChange={(e) => setMessage(e.target.value)}
                                rows="3"
                                placeholder="Masukkan pesan anda"
                                readOnly={status}
                                value={message}
                                />
                        </div>
                        <button
                            type="button"
                            onClick={() => storeReview()}
                            disabled={status}
                            className="btn btn-primary btn-block mt-4">
                            Kirim
                        </button>
                        {status ? (
                            <p>Terimakasih atas review anda</p>
                        ) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review