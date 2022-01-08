import { SocialIcon } from "react-social-icons"

export const Footer = () => {
    return (
        <div>
            <div className="Row">
                <div className="col-6">
                    <h5>Made by Liz Clawson</h5>
                </div>
                <div className="col-6">
                    <SocialIcon url="https://www.instagram.com/lizclawson/"/>
                    <SocialIcon url="http://acnhapi.com/"/>
                    <SocialIcon url="https://github.com/e-clawson"/>
                </div>
            </div>
        </div>
    )
}
