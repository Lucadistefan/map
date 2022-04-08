import React from "react";
import BingMapsReact from "bingmaps-react";

export default function BingMap() {
  return (
    <BingMapsReact
      bingMapsKey="AvUn0VtkLGGIJGIbPYby7IwGjHTc7I9iSZ7QACJ8OKlolJAdPgFNiNNBOiBjZmap"
      height="70vh"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="70vw"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "roadmap",
      }}
    />
  );
}
