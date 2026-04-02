import { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

const PASS = "Prose";

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("pw_ok") === "1"
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = () => {
    if (value === PASS) {
      sessionStorage.setItem("pw_ok", "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] flex items-center justify-center px-6">
      <div className="w-full max-w-[300px] flex flex-col items-center gap-4">
        <p className="font-['Simplon_Mono','monospace'] text-[10px] tracking-[0.8px] uppercase text-[#a6a6a6]">
          prose
        </p>
        <h1 className="font-['Saol_Text',serif] font-light text-[28px] text-[#323429] tracking-[-0.84px] text-center">
          Enter password
        </h1>
        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Password"
          autoFocus
          className="w-full h-[48px] px-4 rounded-[10px] border border-[#e2d9c2] bg-white font-['Simplon_Norm',sans-serif] text-[14px] text-[#323429] tracking-[0.28px] outline-none focus:border-[#4d523c]"
        />
        {error && (
          <p className="font-['Simplon_Norm',sans-serif] text-[13px] text-[#b45446]">
            Incorrect password
          </p>
        )}
        <button
          onClick={submit}
          className="w-full h-[48px] bg-[#323429] text-white rounded-[10px] font-['Simplon_Mono','monospace'] text-[12px] tracking-[1.12px] uppercase cursor-pointer border-none"
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <PasswordGate>
      <RouterProvider router={router} />
    </PasswordGate>
  );
}