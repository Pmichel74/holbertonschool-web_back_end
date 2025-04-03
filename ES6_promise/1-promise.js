export default function getFullResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const response = {
      status: 200,
      body: 'Success',
    };

    if (response.status === 200) {
      resolve(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
