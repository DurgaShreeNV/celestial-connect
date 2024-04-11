import { SignUp } from '@clerk/nextjs';
import VideoBackground from '@/components/VideoBackground'; // Import the VideoBackground component

export default function SignUpPage() {
  return (
    <div className="relative h-screen"> {/* Ensure the container covers the entire screen */}
      <VideoBackground /> {/* Render the VideoBackground component */}
      <main className="flex h-full w-full items-center justify-center relative z-10"> {/* Ensure content is positioned on top of the background */}
        <SignUp />
      </main>
    </div>
  );
}
