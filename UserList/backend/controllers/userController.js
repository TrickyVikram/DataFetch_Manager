const getUsers = (req, res) => {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
    ];
  
    res.json(users); // Respond with the list of users
  };
  
  module.exports = { getUsers };
  