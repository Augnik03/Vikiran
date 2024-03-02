async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/nickmuchi/vit-finetuned-chest-xray-pneumonia",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

query("cats.jpg").then((response) => {
	console.log(JSON.stringify(response));
});

export default query;