import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import dom from "images/dom.jpg"
import bora from "images/bora.jpg"
import james from "images/james.jpg"
import lea from "images/lea.jpg"


const About = () => {
    return(
        <>
            <div className="about">
                <p className="about-us-title">About Us</p>
                <p className="about-us-info">Nobody enjoys moving.</p>
                <p className="about-us-info">
                    After the stress of a major move, the last thing anyone wants to do is blindly sort through their moving boxes struggling to find the item they need right that moment. With PackRat, finding your stuff is easy. Create virtual boxes and list their contents. When it’s time to find that item you need, just search your virtual boxes to find out where it is in the real world.
                </p>
                <p className="about-us-info">
                    Don’t get bitten by your move. Use PackRat.
                </p>
                <p></p>
            </div>

            <div className="two-card-div">
                <Card
                className="card"
                >
                <img className="image-cropper"
                alt="Photo of Dom"
                src={dom}
                />
                <CardBody>
                <CardTitle tag="h5" className="card-title-text">
                    Dom Travis
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted card-title-text"
                    tag="h6"
                >
                    Tech Lead
                </CardSubtitle>
                <CardText>
                    Before attending LEARN Academy I was a freelance audio engineer. My interest in learning to code came from my love to problem solve and the creative freedom this field allows. Pursuing this skill reinforces that there are no limitations, only those that we set in our own mind!
                </CardText>
                </CardBody>
                </Card>
                
                <Card className="card">
                <img className="image-cropper"
                alt="Photo of Bora"
                src={bora}
                />
                <CardBody>
                <CardTitle tag="h5" className="card-title-text">
                    Bora Ros
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted card-title-text"
                    tag="h6"
                    >
                    Product Manager
                </CardSubtitle>
                <CardText>
                    A junior full stack web developer based out of the Pacific Northwest, trying to break into the tech industry. Highly-motivated, and progress-focused individual with an extensive background in the military and sales management. Determined to achieve a longstanding profession within this industry by producing clean, efficient, and effective code.
                </CardText>
                </CardBody>
                </Card>
            </div>

            <div className="two-card-div">
                <Card className="card">
                <img className="image-cropper"
                alt="Photo of James"
                src={james}
                />
                <CardBody>
                <CardTitle tag="h5" className="card-title-text">
                    James Quillen
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted card-title-text"
                    tag="h6"
                >
                    Project Manager
                </CardSubtitle>
                <CardText>
                Prior to LEARN, I spent 15 years as an Army logistician. I am passionate about process improvement and making things more efficient through technology. My interests focus on logical back ends and easy-to-use, aesthetically pleasing front ends for the ultimate user of an application. My background as a military logistician gives me an appreciation for the importance of creating processes and applications that can scale to a large user base.
                </CardText>
                </CardBody>
                </Card>
                
                <Card className="card">
                <img className="image-cropper"
                alt="Photo of Lea"
                src={lea}
                />
                <CardBody>
                <CardTitle tag="h5" className="card-title-text">
                    Lea Hazel
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted card-title-text"
                    tag="h6"
                    >
                    Design Lead
                </CardSubtitle>
                <CardText>
                    After earning my Bachelor's in Sociology from UC Berkeley in May of 2022, I found a passion in software development and learning about the interactions between people and tech. Web development interests me because it combines creative problem-solving and team-based collaboration on a daily basis. I also enjoy playing badminton, collecting Sonny Angels, and finding new music. 
                </CardText>
                </CardBody>
                </Card>
            </div>
      </>
    )
}

export default About