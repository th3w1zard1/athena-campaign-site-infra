"use client";

export const BackgroundDecorator = () => {
  return (
    <>
      {/* Decorative circles with campaign colors */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#1E90FF' }}></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#00BFFF' }}></div>

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Animated floating shapes with campaign colors */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-lg opacity-20 animate-float" style={{ backgroundColor: '#1E90FF' }}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full opacity-20 animate-float-delayed" style={{ backgroundColor: '#00BFFF' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-lg opacity-20 animate-float-slow" style={{ backgroundColor: '#00008B' }}></div>
    </>
  );
};
