


    const token = localStorage.getItem('accessToken');
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Assuming you're sending form data
        },
      };

      const config_header = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Assuming you're sending form data
        },
      };
  


export { config, config_header };

