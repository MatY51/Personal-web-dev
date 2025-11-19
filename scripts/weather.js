
    const weatherCodes = {
      0: { text: "Jasno", icon: "☀️" },
      1: { text: "Převážně jasno", icon: "🌤️" },
      2: { text: "Polojasno", icon: "⛅" },
      3: { text: "Zataženo", icon: "☁️" },
      45: { text: "Mlha", icon: "🌫️" },
      48: { text: "Mrznoucí mlha", icon: "🌫️" },
      51: { text: "Slabé mrholení", icon: "🌦️" },
      61: { text: "Slabý déšť", icon: "🌦️" },
      63: { text: "Déšť", icon: "🌧️" },
      65: { text: "Silný déšť", icon: "🌧️" },
      71: { text: "Sněžení", icon: "🌨️" },
      95: { text: "Bouřka", icon: "⛈️" },
      99: { text: "Silná bouřka", icon: "🌩️" }
    };

    document.getElementById('geoButton').addEventListener('click', async () => {
      const weatherContent = document.getElementById('weatherContent');
      weatherContent.innerHTML = `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Načítám...</span></div>`;
      const modal = new bootstrap.Modal(document.getElementById('weatherModal'));
      modal.show();

      if (!navigator.geolocation) {
        weatherContent.textContent = "Geolokace není podporována v tomto prohlížeči.";
        return;
      }

      try {
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        const { latitude, longitude } = position.coords;

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const data = await weatherResponse.json();
        const { temperature, windspeed, weathercode } = data.current_weather;
        const info = weatherCodes[weathercode] || { text: "Neznámé počasí", icon: "❔" };

        weatherContent.innerHTML = `
          <div class="fs-1">${info.icon}</div>
          <h4>${info.text}</h4>
          <p><strong>Teplota:</strong> ${temperature.toFixed(1)} °C</p>
          <p><strong>Vítr:</strong> ${windspeed.toFixed(1)} km/h</p>
          <p class="text-muted small">Souřadnice: ${latitude.toFixed(3)}, ${longitude.toFixed(3)}</p>
        `;
      } catch (err) {
        weatherContent.textContent = "Nepodařilo se zjistit polohu nebo načíst data.";
      }
    });