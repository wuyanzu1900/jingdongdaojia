import React from 'react';
import './profilephoto.css'
import headPic from '../../../../images/headPic.jpg'

function ProfilePhoto() {
    return (
        <div className="ProfilePhoto">
            <div className="profilephoto-content">
                <div className="mine-photo">
                    <span className="mine-phototitle">头像</span>
                    <img src={headPic} alt="" className="mine-photopic" />
                </div>
                <div className="mine-username">
                    <span className="mine-usernametitle">用户名</span>
                    <span className="mine-usernamecontent">青书</span>
                </div>
                <div className="mine-nickname">
                    <span className="mine-nicknametitle">昵称</span>
                    <span className="mine-nicknamecontent">东理吴彦祖</span>
                </div>
                <div className="mine-sex">
                    <span className="mine-sextitle">性别</span>
                    <span className="mine-sexcontent">保密</span>
                </div>
                <div className="mine-birthday">
                    <span className="mine-birthdaytitle">出生日期</span>
                    <span className="mine-birthday-content">保密</span>
                </div>
            </div>

        </div>
    )
}

export default ProfilePhoto;