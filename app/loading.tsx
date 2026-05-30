export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000810]/95 backdrop-blur-md">
      <div className="relative flex flex-col items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-40 w-40 rounded-full bg-neon-cyan/10 blur-[50px] animate-pulse" />
        </div>

        {/* Logo Text */}
        <div className="relative text-3xl font-bold tracking-tighter">
          <span className="text-gradient">LT</span>
          <span className="text-white">Bank</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[progress_1s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        </div>
      </div>
    </div>
  )
}
