// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./users";
import jsonServerProvider from "ra-data-json-server";

// fetch data from the REST API
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} />
  </Admin>
);

export default App;
