import BackGroundHeading from './BackGroundHeading';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import TodoList from './TodoList';

function App() {
  return (
    <div className=" flex justify-center items-center font-sans bg-[#d9d6c8] min-h-screen flex-col">
      <BackGroundHeading />

      <main className=" relative w-[972px] h-[536px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
