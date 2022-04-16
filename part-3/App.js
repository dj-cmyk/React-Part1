const App = () => (
    <div>
      <Person name="FionaGallagher" age="29" hobbies={["skiing", "surfing", "sitting"]} />
      <Person name="Lip" age="22" hobbies={["fixing bikes", "knitting", "not drinking"]} />
      <Person name="Debbie" age="17" hobbies={["welding", "watching Franny"]} />
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 