{
  // Use a block statement to prevent modifying global scope
  debugger;
  window.postMessage(
    {
      type: "BADGE_TEXT",
      nextJsData: JSON.stringify(
        window.__NEXT_DATA__ ? window.__NEXT_DATA__ : {}
      )
    },
    "*"
  );
}
