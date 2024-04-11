import { SignIn } from '@clerk/nextjs';
import VideoBackground from '@/components/VideoBackground'; // Import the VideoBackground component

export default function SignInPage() {
  return (
    <div className="relative h-screen"> {/* Ensure the container covers the entire screen */}
      <VideoBackground /> {/* Render the VideoBackground component */}
      <main className="flex h-full w-full items-center justify-center relative z-10">
        <SignIn />
      </main>
    </div>
  );
}
