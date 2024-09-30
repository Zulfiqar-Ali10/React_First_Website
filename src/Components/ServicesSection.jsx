function ServicesSection() {
    return (
        <>
       <section className="service_section layout_padding">
            <div className="container ">
                <div className="heading_container heading_center">
                    <h2> Our Services </h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 mx-auto">
                        <div className="box ">
                            <div className="img-box">
                                <img src="src/images/s1.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Maintenance
                                </h5>
                                <p>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mx-auto">
                        <div className="box ">
                            <div className="img-box">
                                <img src="src/images/s2.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Electrical
                                </h5>
                                <p>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mx-auto">
                        <div className="box ">
                            <div className="img-box">
                                <img src="src/images/s3.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Plumbing
                                </h5>
                                <p>
                                    when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <a href="">
                        View More
                    </a>
                </div>
            </div>
        </section >
        </>
    )
}


export default ServicesSection;