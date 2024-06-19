import { Home, SignIn, SignUp } from "@/pages"; // Adjust import based on your page structure
import Dashboard from "./pages/dashboard";
import StreamlitEmbed from '@/components/StreamlitEmbed';

export const routes = [
  {
    name: "Home", // Add name for better navigation labeling
    path: "/home",
    element: <Home />,
  },
  {
    name: "Sign In", // Add name for better navigation labeling
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up", // Add name for better navigation labeling
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Dashboard", // Add name for better navigation labeling
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    name: "Streamlit", // Add name for better navigation labeling
    path: "/streamlit",
    element: <StreamlitEmbed />,
  },
];

export default routes;
