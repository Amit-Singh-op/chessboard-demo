import Chessboard from "./component/ChessBoard";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <header className="fixed top-0 p-2 font-bold left-0 w-full bg-gradient-to-r z-[1]">
        Chess Board
      </header>
      <Chessboard />
    </main>
  );
}
