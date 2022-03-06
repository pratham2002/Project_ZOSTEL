import styles from "../css/Footer.module.css";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <h4>USEFUL LINKS</h4>
                <div>
                    <div>Zostel Homes</div>
                    <div>#iTravellGreen</div>
                    <div>Guest Policies</div>
                    <div>Privacy Policy</div>
                    <div>Career</div>
                    <div>Destination</div>
                    <div>Franchise</div>
                    <div>Contact Us</div>
                    <div>Cookie Policy</div>
                    <div>Passport</div>
                    <div>Community Manager</div>
                    <div>About us</div>
                    <div>Support</div>
                    <div>T & C</div>
                    <div>Covid'19 FAQ's</div>
                </div>
            </div>
            <div>
                <h4>SUBSCRIBE</h4>
                <div>
                    <div>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Second Name" />
                    </div>
                    <div>
                        <input type="email" placeholder="Enter your Email" />
                    </div>
                    <div>
                        <input type="submit" value="SUBMIT" />
                    </div>
                </div>
            </div>
            <div>
                <h4>SOCIAL</h4>
                <div>
                    <div><IoLogoFacebook /></div>
                    <div><IoLogoInstagram /></div>
                    <div><IoLogoTwitter /></div>
                    <div><IoLogoYoutube /></div>
                </div>
                <p>Zostel © 2022. All Rights Reserved</p>
            </div>
        </div>
    );
}
