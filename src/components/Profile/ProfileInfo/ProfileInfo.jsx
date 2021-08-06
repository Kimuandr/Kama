import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
     
    </div>
  );
};
export default ProfileInfo;
