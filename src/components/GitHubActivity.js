import React, { useEffect, useState } from 'react';

const GitHubActivity = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // You'll need to implement the GitHub API calls to fetch your activity
    // Consider using the GitHub REST API or GraphQL API
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-primary mb-6">GitHub Activity</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* GitHub contribution graph */}
        <div className="col-span-full">
          <img 
            src={`https://ghchart.rshah.org/shrey258`}
            alt="GitHub Contributions"
            className="w-full"
          />
        </div>

        {/* Add more GitHub stats and metrics here */}
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://github.com/shrey258"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          View Full Profile →
        </a>
      </div>
    </div>
  );
};

export default GitHubActivity; 