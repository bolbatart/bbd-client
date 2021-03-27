import React from "react";


export interface IRoute {
  auth: boolean,
  path: string,
  page: React.ComponentType,
}