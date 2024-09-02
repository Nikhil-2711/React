import './App.css';
import profileImage from './assets/images/profileImage.jpg'

function App() {
  return (
    <>
      <div className="card">
        <ProfileImage/>
        <Description/>
        <SkillSets/>
      </div>
    </>
  );
}

function ProfileImage(){
  return (<img  src={profileImage} alt="profileImage" width="400" height="200px"/>)
}

function Description(){
  return(
    <div>
      <h3 className="title">Nikhil Patel</h3>
      <p className="description">
        Full-stack web developer.Served as an Associate Software Engineer at The One Technologies.
        Excited to learn new Technologies and love to experiment with new frameworks!!! 😎
      </p>
    </div>
  )
}

function SkillSets(){
  return(
    <div className='skills'>
      <SkillTag bgColor="blue" emoji="🫡" skill="React"></SkillTag>
      <SkillTag bgColor="red" emoji="😎" skill="Angular"></SkillTag><br/>
      <SkillTag bgColor="green" emoji="🤔" skill="Node"></SkillTag>
      <SkillTag bgColor="yellow" emoji="😛" skill="Python"></SkillTag>
    </div>

  )
}

function SkillTag({bgColor,emoji,skill}){
  return(
    <button className='skill' style={{backgroundColor:bgColor}}>
      {skill}{emoji}
    </button>
  )
}

export default App;
