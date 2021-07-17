import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../_metronic/layout";
import { ListadeVendasPage } from "../Vendas/pages/ListadeVendasPage";



export default function PedidosPage() {
  return (
    <Suspense >
      <Switch>
        {
          <Redirect
            exact={true}
            from="/vendas"
            to="/vendas"
          />
        }
        <ContentRoute path="/vendas/lista-de-vendas" component={ListadeVendasPage} />
      </Switch>
    </Suspense>
  );
}