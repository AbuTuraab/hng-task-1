import myImage from "./linkedin.jpg"


function Profile() {
    return(
       <>
      
       <div className="image">
        <div className="trick">

        </div>
      </div>
      <div>

      <img className='myimage' id='profile__img' src={myImage} alt="profile-pic" />

      </div>
      <ul className="text" id="twitter">@AbooTuraab</ul>
      <ul className="text" id="slack" hidden>adenijialiyuolamilekan</ul>
       </>
    );
}

export default Profile;
 