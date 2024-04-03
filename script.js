function fetchData(endpoint) {
  const apiUrl = document.getElementById("apiUrl").value;
  if (!apiUrl) {
    alert("Veuillez entrer l'URL de l'API.");
    return;
  }

  fetch(`${apiUrl}${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Réponse réseau non ok.");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("results").textContent = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => console.error("Erreur de fetch:", error));
}

function fetchDataWithId(endpoint, idFieldId, suffix = "") {
  const apiUrl = document.getElementById("apiUrl").value;
  const itemId = document.getElementById(idFieldId).value;
  if (!apiUrl) {
    alert("Veuillez entrer l'URL de l'API.");
    return;
  }
  if (!itemId) {
    alert("Veuillez entrer un ID.");
    return;
  }

  fetch(`${apiUrl}${endpoint}${itemId}${suffix}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Réponse réseau non ok.");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("results").textContent = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => console.error("Erreur de fetch:", error));
}

const isAlive = () => {
  const apiUrl = document.getElementById("apiUrl").value;
  fetch(`${apiUrl}/api/alive`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Réponse réseau non ok.");
      }
      return response.json();
    })
    .then((data) => {
      if (data.message === "Alive") {
        document.getElementById("aliveStatus").textContent = "✅";
      }
    })
    .catch((error) => {
      document.getElementById("aliveStatus").textContent = "❌";
    });
};

document.getElementById("apiUrl").addEventListener("change", isAlive);
