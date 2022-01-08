import { SocialIcon } from "react-social-icons"

export const Footer = () => {
    return (
        <div>
            <div className="row" style={{display:"flex", height:"50px", marginBottom:"-50px"}}>
                <div className="col-6" style={{width: "50%", float: "left"}}>
                    <h4>Made by Liz Clawson</h4>
                </div>
                <div className="col-6" style={{width: "50%", float: "right"}}>
                    <SocialIcon url="https://www.linkedin.com/in/elizabeth-clawson-175904169/" style={{width:"2em", margin:".2em", padding:".2em"}}/>
                    <SocialIcon url="http://acnhapi.com/" style={{width:"2em", margin:".2em", padding:".2em"}}/>
                    <SocialIcon url="https://github.com/e-clawson" style={{width:"2em", margin:".2em", padding:".2em"}}/>
                </div>
            </div>
        </div>
    )
}
