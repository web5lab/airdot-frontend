import React, { useState } from 'react';
import axios from 'axios';

const DISCORD_AUTH_URL = ''
const App = () => {
  const [isJoined, setIsJoined] = useState(false);

  const handleDiscordAuth = () => {
    window.location = DISCORD_AUTH_URL;
  };

  const checkGuildMembership = async () => {
    try {
      const response = await axios.get('/api/guild/check', {
        withCredentials: true,
      });
      setIsJoined(response.data.isJoined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Discord Server Membership Checker</h1>
      {isJoined ? (
        <p>You have joined the server!</p>
      ) : (
        <button onClick={handleDiscordAuth}>Authenticate with Discord</button>
      )}
      <br />
      <button onClick={checkGuildMembership}>Check Server Membership</button>
    </div>
  );
};

export default App;
