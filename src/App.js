import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="text-center">
      <div className="mt-20">
        <img
          alt="profile"
          className="rounded-full block mx-auto"
          width="130"
          height="130"
          src="./media/profile.jpg"
        ></img>
      </div>
      <h1 className="mt-10 font-mono text-xl text-white">
        Fidelis Farren Pradipto
      </h1>
      <Card
        text="Lihat CV"
        link="https://drive.google.com/file/d/197423uxvkHaFkyB7OTX40-kKKsEFvyDw/view?usp=sharing"
      />
      <Card
        text="Farren Space"
        link="https://ffarren.github.io/farren-space/"
      />
      <Card text="Email" link="mailto:fidelisfarren.work@gmail.com" />
      <Card text="Instagram" link="https://www.instagram.com/ffarrenp/" />
      <Card text="VSCO" link="https://vsco.co/ffarren/gallery" />

      <footer className="p-10">
        <p className="font-mono text-white">made by farren</p>
      </footer>
    </div>
  );
}

export default App;
