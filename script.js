document.getElementById('generateBtn').addEventListener('click', async () => {
  const keyword = document.getElementById('keywordInput').value.trim();
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = 'Generating article... ⏳';


  if (!keyword) {
    outputDiv.textContent = '❗ Please enter a keyword.';
    return;
  }

  try {
    const response = await fetch('https://seo-backend-kb0u.onrender.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ keyword })
    });

    const data = await response.json();

    if (data?.title && data?.content) {
    outputDiv.innerHTML = marked.parse(`# ${data.title}\n\n${data.content}`);


    } else {
     outputDiv.textContent = '❌ Error: Unexpected response from server.';
}

  } catch (error) {
    outputDiv.textContent = `❌ Error: ${error.message}`;
  }
});

document.getElementById('scrollToForm').addEventListener('click', () => {
  document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
});
