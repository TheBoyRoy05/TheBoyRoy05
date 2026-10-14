const LoadingScreen = () => {
  const loadingMessages = [
    "Loading Greatness",
    "Deleting System32 folder",
    "Downloading more RAM...",
    "Still faster than Windows update.",
    "Please wait while we ignore you.",
    "Bored of slow loading spinner?, buy more RAM!",
    "We will be back in 1/0 minutes.",
    "Help, I'm trapped in a loader!",
    "Convincing AI not to turn evil"
  ]

  return (
    <div className="absolute z-[100] bg-[#202020] w-screen h-screen flex-col justify-center items-center font-bold">
      <span className="loading loading-dots loading-lg text-white" />
      <span>{loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}</span>
    </div>
  )
}

export default LoadingScreen
