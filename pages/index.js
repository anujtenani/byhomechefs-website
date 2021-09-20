import Head from 'next/head'
import Logo from "../components/Logo";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import {FiMessageCircle, FiPhone, FiMail} from 'react-icons/fi'
export default function Home() {
  return (
    <>
      <Head>
        <title>By Home Chefs</title>
        <meta name="description" content="Healthy home meals, delivered on time, everytime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <nav className={"py-4 border-bottom"}>
            <div className="text-center">
                <Logo />
            </div>
        </nav>
        <section className="py-4 border-bottom">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 pb-4">
                        <h1 style={{lineHeight:1.5}}>Healthy home meals<br/>delivered on time, everytime</h1>
                        <a href={"https://partners.byhomechefs.com"} className="btn btn-primary text-white btn-lg">Partner with us</a>
                        <div className="d-flex d-none">
                            <img src="/img.png" style={{height:56}} alt="Download on Google Plan" className={"me-2"}/>
                            <img src="/img_2.png"  style={{height:56}}  alt="Download on App Store"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/hero-image.svg" style={{maxWidth:"100%", width:500}}/>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-light">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className={"mb-0"}>Contact us</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <a href={"https://api.whatsapp.com/send?phone=+919717766402&text=hi"} className="d-flex align-items-center justify-content-between list-group-item list-group-item-action p-3">
                                    <span>
                                        <FiMessageCircle size={24} />
                                        <span className={"ms-2"}>WhatsApp</span>
                                    </span>
                                    <small>+91 97177 66402</small>
                                </a>
                                <a href={"tel:+919717766402"} className="d-flex align-items-center justify-content-between list-group-item list-group-item-action p-3">
                                    <span>
                                        <FiPhone size={24} />
                                        <span className={"ms-2"}>Phone</span>
                                    </span>
                                    <small>+91 97177 66402</small>
                                </a>
                                <a href={"mailto:partner@byhomechefs.com"} className="d-flex align-items-center justify-content-between list-group-item list-group-item-action p-3">
                                    <span><FiMail size={24} />
                                        <span className={"ms-2"}>Email</span>
                                    </span>
                                    <small>partner@byhomechefs.com</small>

                                </a>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <footer className={"py-4 bg-secondary bg-opacity-10"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start mb-4">
                        <h4>Terms</h4>
                        <FooterLink title={"General Agreement"} href={"/agreement.pdf"} />
                        <FooterLink title={"Guidelines and Policies"} href={"/"} />
                        <FooterLink title={"Privacy Policy"} href={"/privacy.pdf"} />
                        <FooterLink title={"Merchant Terms"} href={"/merchantterms.pdf"} />

                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <h4>Support</h4>
                        <FooterLink title={"help and support"} />
                        <FooterLink title={"partner with us"} />
                        <FooterLink title={"deliver with us"} />
                        <FooterLink title={"report fraud"} href={"mailto:partner@byhomechefs.com"} />
                    </div>
                    <div className="col-md-4 text-center text-md-end mb-4">
                        <h4>Social</h4>
                        <FooterLink title={"facebook"} href={"https://www.facebook.com/byhomechefs/"} />
                        <FooterLink title={"instagram"} href={"https://www.facebook.com/byhomechefs/"} />
                        <FooterLink title={"pinterest"} href={"https://in.pinterest.com/byhomechefs/"} />
                        <FooterLink title={"twitter"} />
                        <FooterLink title={"whatsapp"} href={"https://api.whatsapp.com/send?phone=+919717766402&text=hi"} />

                    </div>
                </div>
                <div className="text-center my-4 text-muted">
                    Copyright © 2021 By Home Chefs, Inc. All rights reserved.
                </div>
            </div>
        </footer>
        <FloatingWhatsApp />
    </>
  )
}
function FooterLink({title, href}){
    return <small><a href={href} className={"d-block text-lowercase py-2 text-decoration-none text-secondary"}>{title}</a></small>
}
