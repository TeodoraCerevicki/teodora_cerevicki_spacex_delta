import rocket from "../../images/rocket_launch.svg";
import ThemeToggler from "../theme-toggler/DarkMode";

export default function Header() {
  return (
    <header className="main-header">
        <div className="container wrapper">
            <img className="image" alt="company logo" src={rocket} />

            <ThemeToggler />
        </div>
    </header>
  )
}
