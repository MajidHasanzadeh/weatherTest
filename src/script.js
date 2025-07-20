navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log("Latitude:", pos.coords.latitude);
      console.log("Longitude:", pos.coords.longitude);
    },
    (err) => {
      console.error("Error:", err.message);
    }
  );
  