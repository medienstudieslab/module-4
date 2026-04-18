fetch(
  "https://opensheet.elk.sh/13nCJfTBnAUymI57DaYSZXcCsPeeta4GMX4thzWv-0dA/Sheet1",
)
  .then((res) => res.json())
  .then((rows) => {
    const tbody = document.querySelector("#program-table tbody");

    rows.forEach((row) => {
      const tr = document.createElement("tr");

      const tdTime = document.createElement("td");
      tdTime.textContent = row["Время"];

      const tdEvent = document.createElement("td");
      tdEvent.textContent = row["Событие"];

      const tdSpeaker = document.createElement("td");
      tdSpeaker.textContent = row["Спикер"];

      tr.appendChild(tdTime);
      tr.appendChild(tdEvent);
      tr.appendChild(tdSpeaker);

      tbody.appendChild(tr);
    });
  });
