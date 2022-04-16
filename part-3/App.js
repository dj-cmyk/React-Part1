const App = () => (
    <div>
      <Tweet username="georgemichael" name="George Michael" date="April 16, 2022" message="Mister Manager!" />
      <Tweet username="steveholt" name="Steve" date="April 16, 2022" message="Steve Holt!" />
      <Tweet username="hermano" name="Buster" date="April 16, 2022" message="Hey Brother!" />
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 