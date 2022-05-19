import CarouselCard from "../large/carouselCard";
import { useState, useEffect } from "react";
import callAPI from "../../config/api";


const Carousel = () => {
    const [dataCarousel, setDataCarousel] = useState([]);
    const getReviews = async() => {
        const data = await callAPI({
            method: "GET",
            path: "/reviews",
        })
        setDataCarousel(data.data.data);
    }
    useEffect(() => {
        getReviews();
    }, []);
    if(dataCarousel.length === 0){
        return <div></div>
    }
    return (
        <section
            className="bg-white"
            style={{
                minHeight:"60vh"
            }}>
            <div
                className="container">
                <h2
                    className="text-primary text-center">
                    Kata Mereka
                </h2>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel">
                    <div
                        className="carousel-inner">
                        {dataCarousel.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <CarouselCard
                                        data={item}
                                        />
                                </div>
                            )}
                        )}
                    </div>
                    <button
                        className="carousel-control-prev"
                        style={{
                            border:"none",
                            opacity:0
                        }}
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true" />
                        <span
                            className="visually-hidden">
                            Previous
                        </span>
                    </button>
                    <button
                        className="carousel-control-next"
                        style={{
                            border:"none",
                            opacity:0
                        }}
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true" />
                        <span
                            className="visually-hidden">
                            Next
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carousel;
