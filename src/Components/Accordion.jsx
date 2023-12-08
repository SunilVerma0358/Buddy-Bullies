import React from 'react';

const Accordion = () => {
  return (
    <section className="overflow" id="faqs">
        <div className="d-flex justify-content-center bg_dark_prime mt_1 position-relative z_2">
            <div className="container ff_poppins">
                <h2 data-aos="flip-right" className="fs_3xl fw_bold text_white text-center py-5">FAQs</h2>
                <div className="accordion accordion-flush mw_830 mx-auto" id="accordionFlushExample">
                    <div  className="accordion-item w-100 my-4">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fs_lg fw-medium" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseone" aria-expanded="false"
                                aria-controls="flush-collapseone ">
                                What’s the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapseone" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs_sm gray">Hac varius turpis sit pulvinar lorem magna velit sit.
                                Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in
                                accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer.
                                Non.
                            </div>
                        </div>
                    </div>
                    <div  className="accordion-item w-100 mt-4">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  fs_lg fw-medium" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                What’s the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs_sm fw-medium gray">Hac varius turpis sit pulvinar lorem magna
                                velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas
                                sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non,
                                integer.
                                Non.
                            </div>
                        </div>
                    </div>
                    <div  className="accordion-item w-100 mt-4">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  fs_lg fw-medium" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                What’s the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div data-aos="flip-left" id="flush-collapseThree" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs_sm fw-medium gray">Hac varius turpis sit pulvinar lorem magna
                                velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas
                                sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non,
                                integer.
                                Non.
                            </div>
                        </div>
                    </div>
                    <div  className="accordion-item w-100 my-4">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fs_lg fw-medium" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseFour">
                                What’s the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs_sm fw-medium gray">Hac varius turpis sit pulvinar lorem magna
                                velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas
                                sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non,
                                integer.
                                Non.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion_e d-none d-sm-block"></div>
        </div>
    </section>
  )
}

export default Accordion;