import profilePic from '../assets/profile.jpeg'; 

export default function Profile() {
  return (
    <div className="page">
      <div className="profile-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-info">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
          <div className="camera-icon">📷</div>
        </div>
        <div className="profile-details">
          <h4>Marry Doe</h4>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="profile-desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}