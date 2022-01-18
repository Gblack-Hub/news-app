
export default function StatCard({stat}) {
    return (
        <section className="col-sm-6 col-md-6 col-lg-3 col-6 mb-3 mb-lg-0">
            <div className="stat_card">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <stat.icon fontSize="large" className="primary_color" />
                    </div>
                    <div className="ms-1">
                        <h2 className="stat_card__count mb-0">{stat.count}</h2>
                        <div className="stat_card__title">{stat.title}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}