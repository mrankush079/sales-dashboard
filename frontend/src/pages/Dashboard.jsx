// // src/pages/Dashboard.jsx
// import { useEffect, useRef, useState } from "react";
// import * as echarts from "echarts";
// import api from "../api/axiosInstance";
// import { useAuth } from "../context/AuthContext";

// export default function Dashboard() {
//   const { logout, user } = useAuth();

//   const [data, setData] = useState(null);
//   const [llmOutput, setLlmOutput] = useState(null);
//   const [loadingLLM, setLoadingLLM] = useState(false);

//   // Refs for charts
//   const salesRegionRef = useRef(null);
//   const salesQtrRef = useRef(null);
//   // ... other refs

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await api.get("/sales/dashboard-data");
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!data) return;
//     // Init charts using data, similar to your initCharts()
//     const chartSalesRegion = echarts.init(salesRegionRef.current);
//     chartSalesRegion.setOption({
//       /* use data.regions, data.categoryData etc. exactly like HTML */
//     });

//     // etc. for other charts...

//     const handleResize = () => {
//       chartSalesRegion.resize();
//       // etc...
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [data]);

//   const handleExecutiveInsight = async () => {
//     if (!data) return;
//     setLoadingLLM(true);
//     try {
//       const userQuery = /* same generateOverallSummaryText logic but using state data */;
//       const systemPrompt =
//         "You are a world-class financial analyst and business strategist...";

//       const { data: aiRes } = await api.post("/ai/analyze", {
//         userQuery,
//         systemPrompt,
//         useGrounding: true,
//         title: "Executive Overview"
//       });

//       const candidate = aiRes.candidates?.[0];
//       const text = candidate?.content?.parts?.[0]?.text || "";
//       setLlmOutput(text);
//     } catch (err) {
//       setLlmOutput("Failed to generate analysis.");
//     } finally {
//       setLoadingLLM(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 md:p-8">
//       <header className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
//         <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 inline-block mb-4 md:mb-0">
//           SALES DASHBOARD
//         </h1>
//         <div className="flex gap-3">
//           <button
//             onClick={handleExecutiveInsight}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-sm"
//           >
//             ✨ Generate Executive Sales Insight
//           </button>
//           <button
//             onClick={logout}
//             className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg"
//           >
//             Logout ({user?.name})
//           </button>
//         </div>
//       </header>

//       {llmOutput && (
//         <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//           <h2 className="text-lg font-bold text-indigo-700 mb-2">
//             AI Sales Analysis
//           </h2>
//           <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
//             {llmOutput}
//           </div>
//         </div>
//       )}

//       <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white rounded-xl shadow-md p-4 flex flex-col h-[350px]">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">
//             Total sales with cat. by region
//           </h2>
//           <div ref={salesRegionRef} className="w-full flex-grow" />
//           {/* Category dropdown + Deep Dive button can go here, similar to your HTML */}
//         </div>

//         <div className="bg-white rounded-xl shadow-md p-4 h-[350px]">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">
//             Sum of total sales by Quarter
//           </h2>
//           <div ref={salesQtrRef} className="w-full h-[280px]" />
//         </div>

//         {/* Repeat for the remaining charts using refs */}
//       </main>
//     </div>
//   );
// }



// frontend/src/pages/Dashboard.jsx

import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 inline-block mb-4 md:mb-0">
          SALES DASHBOARD
        </h1>

        <div className="flex items-center gap-3">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-sm"
            onClick={() => alert("AI insight will come here later")}
          >
            ✨ Generate Executive Sales Insight
          </button>

          <button
            onClick={logout}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg border"
          >
            Logout {user ? `(${user.name})` : ""}
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4 h-40 flex items-center justify-center text-gray-500 text-sm">
          Charts & analytics will be added here.
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 h-40 flex items-center justify-center text-gray-500 text-sm">
          More dashboard cards…
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 h-40 flex items-center justify-center text-gray-500 text-sm">
          KPIs / metrics / filters…
        </div>
      </main>
    </div>
  );
}
