import Image from "next/dist/client/image";

const CarouselCard = ({data}) => {
    let minus = 5 - data.star;
    let star = [];
    for (let i = 0; i < data.star; i++) {
        star.push(1);
    }
    for (let i = 0; i < minus; i++) {
        star.push(0);
    }
    return (
        <div
            className="card mb-3 mx-auto"
            style={{
                maxWidth: '540px',
                border:'none'
            }}>
            <div
                className="row g-0 align-items-center">
                <div
                    className="col-md-4">
                    <Image
                        src={data.user.photo[0]}
                        className="img-fluid rounded"
                        width={200}
                        height={200}
                        alt={data.user.name} />
                </div>
                <div
                    className="col-md-8">
                    <div
                        className="card-body">
                        <h5
                            className="card-title">
                            {data.user.name}
                        </h5>
                        <p>
                            {star.map((item, index) => {
                                return (
                                    <span
                                        className={`fa fa-star ${item === 1 ? 'checked' : ''}`}
                                        key={index}
                                        />
                                    )
                                }
                            )}
                            <span
                                className="ms-2">
                                {data.star}/5
                            </span>
                        </p>
                        <p
                            className="card-text">
                            {data.comment}
                        </p>
                        <p
                            className="card-text">
                            <small
                                className="text-muted">
                                {data.created_at}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard;
