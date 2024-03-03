async function query(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/nickmuchi/vit-finetuned-chest-xray-pneumonia",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to query the model.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error querying the model:", error);
    throw error;
  }
}

// Example usage:
// Assume you have a file input element with id="fileInput"
// document
//   .getElementById("fileInput")
//   .addEventListener("change", async (event) => {
//     const file = event.target.files[0];
//     if (!file) {
//       console.error("No file selected.");
//       return;
//     }

//     try {
//       const response = await query(file);
//       console.log(JSON.stringify(response));
//     } catch (error) {
//       console.error("Error performing query:", error);
//     }
//   });

export default query;
