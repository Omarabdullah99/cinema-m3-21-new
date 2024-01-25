import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <div className=" grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </div>
  );
}
