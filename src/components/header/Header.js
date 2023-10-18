import rocket from "../../images/rocket_launch.svg";

export default function Header() {
  return (
    <header className="main-header">
        <div className="container">
            <img className="image" alt="company logo" src={rocket} />
        </div>
    </header>
  )
}
