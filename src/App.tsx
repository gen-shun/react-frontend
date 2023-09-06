import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import CustomerProfiles from "./pages/list-customer-profile/CustomerProfiles";
import CreateCustomerProfile from "./pages/create-customer-profile/CreateCustomerProfilePage";
import Layout from "./Layout";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";

const queryClient = new QueryClient();

export default function App() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <p>
        ログインして下さい
        <LoginButton />
      </p>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CustomerProfiles />} />
            <Route
              path="customer-profiles/list"
              element={<CustomerProfiles />}
            />
            <Route
              path="customer-profiles/create"
              element={<CreateCustomerProfile />}
            />
          </Route>
        </Routes>
      </QueryClientProvider>
    );
  }
}
