import { Route } from "wouter";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import NewOrder from "./pages/NewOrder";
import Orders from "./pages/Orders";
import OrderToPrint from "./pages/OrderToPrint";
import type { Component } from "./utils/types";

function Routes(): Component {
  return (
    <Layout>
      <Route path="/" component={Dashboard} />
      <Route path="/new-order" component={NewOrder} />
      <Route path="/orders" component={Orders} />
      <Route path="/order-to-print" component={OrderToPrint} />

      {/* <Route path="/users/:name">
        {params => <div>Hello, {params.name}!</div>}
      </Route> */}
    </Layout>
  );
}

export default Routes;
