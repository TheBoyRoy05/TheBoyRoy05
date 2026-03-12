import { useEffect, useState } from 'react';

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Fetch the last commit from the GitHub API
  const fetchLastCommit = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/TheBoyRoy05/TheBoyRoy05/commits');
      const data = await response.json();

      if (data.length > 0) {
        const lastCommitDate = data[0].commit.author.date;
        const formattedDate = new Date(lastCommitDate).toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          hour12: true,
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        });
        
        setLastUpdated(formattedDate);
      }
    } catch (error) {
      console.error("Error fetching last commit:", error);
    }
  };

  useEffect(() => {
    fetchLastCommit();
  }, []);

  return (
    <span>{`Last updated on ${lastUpdated} PST`}</span>
  );
};

export default LastUpdated;