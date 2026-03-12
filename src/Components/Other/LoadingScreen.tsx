const LoadingScreen = () => {
  return (
    <div className="absolute z-[100] bg-[#202020] w-screen h-screen flex-col justify-center items-center font-bold">
      <span className="loading loading-dots loading-lg text-white" />
      <span>Just a Moment</span>
    </div>
  )
}

export default LoadingScreen
