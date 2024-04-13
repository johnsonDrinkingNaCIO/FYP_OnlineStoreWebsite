
export default async function data() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("There was an error fetching the comments", error);
  }
}