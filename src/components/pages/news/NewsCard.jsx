
export default function NewsCard({news}){
    return (
        <section className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card news_card h-100">
                <img src={news?.urlToImage} className="card-img-top news_card__image" alt={news.title} />
                <div className="card-body position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="flex-fill">
                            <div className="card-text text-end text-muted small">{news?.publishedAt}</div>
                            <a href={news.url} target="_blank" rel="noreferrer" className='text-decoration-none'>
                                <h6 className="card-title primary_color fw-bold">{news?.title}</h6>
                            </a>
                            <p className="card-text small">{news?.author}</p>
                        </div>
                    </div>
                    <p>{news.content}</p>
                </div>
            </div>
        </section>
    )
}