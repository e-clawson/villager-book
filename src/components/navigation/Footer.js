import { SocialIcon } from "react-social-icons"

export const Footer = () => {
    return (
        <div>
            <div className="row" style={{display:"flex", height:"50px", marginBottom:"-50px"}}>
                <div className="col-6" style={{width: "50%", float: "left"}}>
                    <h5>Made by Liz Clawson</h5>
                </div>
                <div className="col-6" style={{width: "50%", float: "right"}}>
                    <SocialIcon url="https://www.linkedin.com/in/elizabeth-clawson-175904169/"/>
                    <SocialIcon url="http://acnhapi.com/"/>
                    <SocialIcon url="https://github.com/e-clawson"/>
                </div>
            </div>
        </div>
    )
}
