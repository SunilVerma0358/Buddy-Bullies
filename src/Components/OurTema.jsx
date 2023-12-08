import React from 'react';
import Bullister from'../Assets/Image/bullister.webp';
import Bullie from'../Assets/Image/bullie.webp';
import Meta from'../Assets/Image/meta.webp';

const OurTema = () => {

  return (
    <section  className="overflow" id="team">
    <div  className="d-flex justify-content-center bg_dark_prime mt_1 pb-lg-5 ">
        <div  className="container ff_poppins py-sm-5">
            <h2 data-aos="flip-left"  className="fs_3xl text_white fw_bold text-center py-5">Our Team</h2>
            <div  className="row justify-content-center pb-5">
                <div   className="col-lg-4 col-md-6 three_hover">
                    <div  className="text-center pb-2 pt-3"><img  className="w-100 h-auto" src={Bullister}
                            alt="bulliester"/>
                    </div>
                    <h3  className="fs_2xl text_white fw-medium text-center pt-4">Prime Bullister </h3>
                    <p  className="fs_md text_white fw-normal pt_2 text-center phara">Pruduct Designer</p>
                </div>
                <div   className="col-lg-4 col-md-6 three_hover pt-5 pt-md-0">
                    <div  className="text-center pb-2 pt-3"><img  className="w-100 h-auto" src={Bullie} alt="bullie"/>
                    </div>
                    <h3  className="fs_2xl text_white fw-medium text-center pt-4">Solvador Bulli </h3>
                    <p  className="fs_md  fw-normal text-center pt_2 text_white phara">Artist</p>
                </div>
                <div   className="col-lg-4 col-md-6 three_hover pt-5 pt-lg-0 ">
                    <div  className="text-center pb-2"><img  className=" h-auto w-100" src={Meta} alt="meta"/></div>
                    <h3  className="fs_2xl text_white fw-medium text-center pt-4">Meta Bully </h3>
                    <p  className="fs_md  fw-normal text-center pt_2 text_white phara">Developer</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurTema;