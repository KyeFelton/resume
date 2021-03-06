import React, { useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import infocusImage from "../../images/infocus_sample.png"

const Infocus = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section id="infocus">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Container className="project-page">
                    <div className="project-title">
                        <h5>Completed <span>&#8226;</span> 2020</h5>
                        <h2>IN FOCUS Symptom Tracker</h2>
                        <h4>A website for recording and monitoring symptoms of CIPN</h4>
                    </div>
                    <div className="project-image">
                    <LazyLoadImage effect="blur" className="image-discrete-size" alt="" src={infocusImage}/>
                    </div>
                    <div className="project-description">

                        <p>Chemotherapy-induced peripheral neuropathy, or CIPN, is a major side effect of common chemotherapies used to treat various forms of cancer. The condition affects nerves, leading to pain, weakness of muscles and numbness or loss of senses of touch. Patients with this medical condition experience many daily difficultlies and reduced quality of life.</p>

                        <p>For my capstone project, my team and I were tasked to develop a website where patients undergoing chemotherapy can record, monitor and visualise their CIPN symptoms over time, and share their data with participating doctors and researchers for analysis. The project was to undertaken on behalf of the Brain and Mind Centre at the University of Sydney and the <a href="https://www.infocusstudy.org.au/" >IN FOCUS research project</a>. </p>

                        <p>Our team decided to use Django to handle the back-end logic, style the front-end with Bootstrap, and deploy the prototype onto AWS Beanstalk. Throughout its entirety, our team actively met with the client to demonstrate the team's progress as well as discuss ideas, challenges and successes with the project. Furthermore, we implemented industry-standard practices from Agile methodologies such as XP to promote both flexibility and quality - two critical factors required to finish the project on time whilst meeting the client's standards. Some of my individual contributions to the project included:</p>
                        <ul>
                            <li>Implemented several front-end UI elements with Bootstrap including the log-in page, account creation page, symptom recording pages and the sidebar navigation.</li>
                            <li>Developed the back-end logic with Django for account creation, account sign-in, account settings and email communications.</li>
                            <li>Created unit tests for the elements I contributed.</li>
                            <li>Researched deployment options and presented findings to client.</li>
                            <li>Facilitated several meetings with the client.</li>
                            <li>Regularly checked in with team members, tracked team progress and submitted weekly progress reports to the client.</li>
                        </ul>
                    </div>

                    <div className="row-center">
                        <Button className="btn-special" onClick={() => props.history.goBack()}>Back to home</Button>
                    </div>

                </Container>
            </motion.div>
        </section>
    )
}

export default Infocus