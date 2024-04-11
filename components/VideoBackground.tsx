const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/icons/bgv.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
