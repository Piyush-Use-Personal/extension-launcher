
function loadFile() {
  const chartContainer = document.createElement("canvas");
  chartContainer.setAttribute("id", "chartContainer");
  document.body.appendChild(chartContainer);

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/chart.js";
  document.body.appendChild(script);
  script.onload = () => {
    const domScript = document.createElement("script");
    domScript.src = chrome.extension.getURL("js/dom/chart.js");
    document.body.appendChild(domScript);
  };
}
loadFile();
