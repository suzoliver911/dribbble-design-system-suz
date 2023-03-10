import logots from "./assets/card-image-ts.svg";
import "./App.css";
import UnderlineButton from "./lib/components/UnderlineButton";
import CourseCardVertical from "./lib/components/CourseCardVertical";
import CourseCardHorizontal from "./lib/components/CourseCardHorizontal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/lib/components</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="My-Stuff">
          <h5>Local Components Pilot</h5>
          <UnderlineButton label="Browse all" />
          <p>Course Card Vertical</p>
          <CourseCardVertical
            image={logots}
            title="Statechart Driven UI Components with Zag.js"
            kicker="Course"
            name="Segun Adebayo"
          />

          <p>Course Card Horizontal</p>
          <CourseCardHorizontal
            image={logots}
            title="Statechart Driven UI Components with Zag.js"
            kicker="Course"
            name="Segun Adebayo"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
