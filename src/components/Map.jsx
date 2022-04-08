import React from "react";
import BingMapsReact from "bingmaps-react";

function BingMap() {
  return (
    <BingMapsReact
      bingMapsKey="AvUn0VtkLGGIJGIbPYby7IwGjHTc7I9iSZ7QACJ8OKlolJAdPgFNiNNBOiBjZmap"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );
}
