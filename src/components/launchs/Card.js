import rocket from "../../images/rocket_launch.svg";

export default function Post(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <section className="card">
        <header>
          <img className="image" alt="rocket" src={rocket} />
          <h1 className="title">{props.mission_name}</h1>
        </header>

        <div className="content">
          <span className="date">{props.launch_date_utc}</span>
          <p className="details">{props.details}</p>
        </div>

        <footer>
          <button className="accent-button details-button">More Details</button>
        </footer>
      </section>
    </div>
  );
}
