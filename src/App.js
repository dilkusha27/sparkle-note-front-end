import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />
          {/* <Route path="/roll" element={<HomePage />} />
          <Route path="/papers" element="" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
// import { Home, User, BookOpen, LogIn, Smile, Star, Heart } from 'lucide-react';

// const App = () => {
//   return (
//     <div className="bg-yellow-50 min-h-screen font-sans text-gray-800">
//       <header className="bg-gradient-to-r from-pink-400 to-purple-400 text-white p-4 rounded-b-3xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center">Rolling Paper 📜✨</h1>
//       </header>
      
//       <main className="p-6">
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">로그인하기</h2>
//           <div className="space-y-4">
//             <button className="w-full bg-green-400 p-4 rounded-full shadow-md flex items-center justify-center text-white transition transform hover:scale-105">
//               <span className="mr-2">네이버로 로그인</span>
//               <LogIn size={20} />
//             </button>
//             <button className="w-full bg-yellow-400 p-4 rounded-full shadow-md flex items-center justify-center text-white transition transform hover:scale-105">
//               <span className="mr-2">카카오로 로그인</span>
//               <LogIn size={20} />
//             </button>
//           </div>
//         </section>
        
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">학생 로그인</h2>
//           <form className="space-y-4">
//             <input type="text" placeholder="학급 이름" className="w-full p-4 rounded-full border-2 border-pink-300 focus:border-purple-400 focus:outline-none" />
//             <input type="text" placeholder="학급코드" className="w-full p-4 rounded-full border-2 border-pink-300 focus:border-purple-400 focus:outline-none" />
//             <input type="text" placeholder="닉네임" className="w-full p-4 rounded-full border-2 border-pink-300 focus:border-purple-400 focus:outline-none" />
//             <button className="w-full bg-purple-500 text-white p-4 rounded-full shadow-md transition transform hover:scale-105">
//               로그인하기 <Smile className="inline ml-2" size={20} />
//             </button>
//           </form>
//         </section>
        
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">마이페이지</h2>
//           <div className="bg-white p-6 rounded-3xl shadow-md">
//             <h3 className="font-semibold mb-3 text-pink-500">학급코드 생성</h3>
//             <button className="w-full bg-green-400 text-white p-3 rounded-full shadow-md transition transform hover:scale-105">
//               새 코드 만들기 <Star className="inline ml-2" size={20} />
//             </button>
//             <h3 className="font-semibold mt-5 mb-3 text-pink-500">내 롤링 페이퍼</h3>
//             <ul className="space-y-3">
//               <li className="bg-pink-100 p-3 rounded-2xl flex items-center">
//                 <Heart className="mr-2 text-red-400" size={16} /> 이젠초등학교 4-1
//               </li>
//               <li className="bg-purple-100 p-3 rounded-2xl flex items-center">
//                 <Heart className="mr-2 text-red-400" size={16} /> 이젠초등학교 4-2
//               </li>
//               <li className="bg-blue-100 p-3 rounded-2xl flex items-center">
//                 <Heart className="mr-2 text-red-400" size={16} /> 이젠초등학교 4-3
//               </li>
//             </ul>
//           </div>
//         </section>
        
//         <section>
//           <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">롤링 페이퍼</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {[...Array(18)].map((_, i) => (
//               <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center text-sm shadow-md transition transform hover:scale-105 ${
//                 i % 3 === 0 ? 'bg-pink-200' :
//                 i % 3 === 1 ? 'bg-purple-200' : 'bg-blue-200'
//               }`}>
//                 <Smile size={24} className="mr-2" /> 내용
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
      
//       <nav className="fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-3xl flex justify-around py-3 shadow-lg">
//         <button className="flex flex-col items-center text-pink-500">
//           <Home size={28} />
//           <span className="text-xs mt-1">홈</span>
//         </button>
//         <button className="flex flex-col items-center text-purple-500">
//           <User size={28} />
//           <span className="text-xs mt-1">내 정보</span>
//         </button>
//         <button className="flex flex-col items-center text-blue-500">
//           <BookOpen size={28} />
//           <span className="text-xs mt-1">롤링 페이퍼</span>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default App;