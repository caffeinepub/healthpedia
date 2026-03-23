import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AZListing } from "@/pages/AZListing";
import { CategoryPage } from "@/pages/CategoryPage";
import { DiseaseDetail } from "@/pages/DiseaseDetail";
import { Home } from "@/pages/Home";
import { SearchResults } from "@/pages/SearchResults";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || "",
  }),
  component: SearchResults,
});

const diseaseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/disease/$id",
  component: DiseaseDetail,
});

const azListingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/diseases",
  component: AZListing,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$type",
  component: CategoryPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  searchRoute,
  diseaseDetailRoute,
  azListingRoute,
  categoryRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
