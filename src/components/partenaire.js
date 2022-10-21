import React from 'react'
import './partenaire.css'

function partenaire() {
  return (
    <>  
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
            <div class="ekit-heading elementskit-section-title-wraper text_center   ekit_heading_tablet-   ekit_heading_mobile-">
                <h2 style={{textAlign: "center", margin: "1.5rem 0"}} class="ekit-heading--title elementskit-section-title">
					Ils nous soutiennent
				</h2>
            </div>
            <div className="slick-list swiper-wrapper partenaires" style={{transform: "translate3d(0px, 0px, 0px);", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem"}}>
                <div className="box elementskit-client-slider-item swiper-slide swiper-slide-active" style={{width: "224px;"}}>
                    <div className="slick-slide">
                        <div className="single-client image-switcher" title="Title #1">
                            <div className="content-image">
                                <img style={{width:"auto", height:"100px"}} src="https://ecole241.org/wp-content/uploads/2021/10/AM-REV.png"
                                loading="lazy" 
                                alt='img'
                                srcset="https://ecole241.org/wp-content/uploads/2021/10/AM-REV.png 748w, https://ecole241.org/wp-content/uploads/2021/10/AM-REV-300x134.png 300w, https://ecole241.org/wp-content/uploads/2021/10/AM-REV-600x268.png 600w"  sizes="(max-width: 369px) 100vw, 369px"
                            />
                            </div>
                        </div>
                </div>
                </div>
                <div className="box elementskit-client-slider-item swiper-slide swiper-slide-next" style={{width: "224px;"}}>
                    <div className="slick-slide">
                        <div className="single-client image-switcher" title="Title #2">
                            <div className="content-image">
                                <img style={{width:"auto", height:"100px"}} src="https://ecole241.org/wp-content/uploads/2021/10/FD-REV.png"
                                loading="lazy" 
                                alt='img'
                                srcset="https://ecole241.org/wp-content/uploads/2021/10/FD-REV.png 748w, https://ecole241.org/wp-content/uploads/2021/10/FD-REV-300x134.png 300w, https://ecole241.org/wp-content/uploads/2021/10/FD-REV-600x268.png 600w"  sizes="(max-width: 369px) 100vw, 369px"
                            />
                            </div>
                    </div>
                </div>
                </div>      
                <div className="box elementskit-client-slider-item swiper-slide" style={{width: "224px;"}}>
                    <div className="slick-slide">
                        <div className="single-client image-switcher" title="Title #3">
                            <div className="content-image">
                                <img style={{width:"auto", height:"100px"}} src="https://ecole241.org/wp-content/uploads/2021/10/site-logo.png"
                                loading="lazy" 
                                alt='img'
                                srcset="https://ecole241.org/wp-content/uploads/2021/10/site-logo.png 463w, https://ecole241.org/wp-content/uploads/2021/10/site-logo-300x100.png 300w"  sizes="(max-width: 369px) 100vw, 369px"
                                />
                            </div>
                    </div>
                </div>
                </div>
                <div className="box elementskit-client-slider-item swiper-slide" style={{width: "224px;"}}>
                    <div className="slick-slide">
                        <div className="single-client image-switcher" title="Title #4">
                            <div className="content-image">
                                <img style={{width:"auto", height:"100px"}} src="https://ecole241.org/wp-content/uploads/2021/10/logo-removebg-preview.png"
                                loading="lazy" 
                                alt='img'
                                srcset="https://ecole241.org/wp-content/uploads/2021/10/logo-removebg-preview.png 369w, https://ecole241.org/wp-content/uploads/2021/10/logo-removebg-preview-300x111.png 300w" sizes="(max-width: 369px) 100vw, 369px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box elementskit-client-slider-item swiper-slide" style={{width: "224px;"}}>
                    <div className="slick-slide">
                        <div className="single-client image-switcher" title="Title #5">
                            <div className="content-image">
                                <img style={{width:"auto", height:"100px"}} 
                                    src="https://ecole241.org/wp-content/uploads/2021/10/ONE-REV.png"
                                    loading="lazy" 
                                    alt='img'
                                    srcset="https://ecole241.org/wp-content/uploads/2021/10/ONE-REV.png 748w, https://ecole241.org/wp-content/uploads/2021/10/ONE-REV-300x134.png 300w, https://ecole241.org/wp-content/uploads/2021/10/ONE-REV-600x268.png 600w"  sizes="(max-width: 369px) 100vw, 369px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
    </>
  )
}

export default partenaire