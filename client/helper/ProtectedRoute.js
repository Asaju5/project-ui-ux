import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute(Component) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = true;

      if (!isAuthenticated) {
        router.push("/login");
      }
    }, []);

    return <Component />;
  };
}
