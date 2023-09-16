export default function Loading() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 800 600" className="h-36 animate-pulse">
        <path
          className="fill-yellow-500"
          d="M399.3 211.7c10.1 0 14.1 2 14.1 2l6-25.5s4.7 19.5 6.7 36.9c2 17.5 32.9 6 59.1.7 26.2-5.4 31.5-47.7 31.5-47.7h242.4s-146.4 44.3-109.4 141.7c0 0-216.2-32.9-249.8 102.1C366.3 287 150.1 319.8 150.1 319.8 187 222.5 40.7 178.1 40.7 178.1h242.4s5.4 42.3 31.5 47.7c26.2 5.4 57.1 16.8 59.1-.7s6.7-36.9 6.7-36.9l6 25.5s4-2 14.1-2h-1.2z"
        />
      </svg>
    </main>
  );
}
