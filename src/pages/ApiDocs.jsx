import { useState } from 'react';
import { FiCopy, FiCheck, FiCode, FiBook, FiBox, FiUsers, FiTag } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ApiDocs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('graphql');
  const [copied, setCopied] = useState(false);

  const languages = [
    { id: 'graphql', name: 'GraphQL' },
    { id: 'curl', name: 'cURL' },
    { id: 'nodejs', name: 'Node.js' },
    { id: 'python', name: 'Python' },
  ];

  const endpoints = [
    {
      category: 'Posts',
      icon: <FiBook />,
      items: [
        { name: 'Get User Posts', method: 'QUERY' },
        { name: 'Create Post', method: 'MUTATION' },
        { name: 'Update Post', method: 'MUTATION' },
      ]
    },
    {
      category: 'Users',
      icon: <FiUsers />,
      items: [
        { name: 'Get User Profile', method: 'QUERY' },
        { name: 'Update Profile', method: 'MUTATION' },
        { name: 'Follow User', method: 'MUTATION' },
      ]
    },
    {
      category: 'Tags',
      icon: <FiTag />,
      items: [
        { name: 'Get Popular Tags', method: 'QUERY' },
        { name: 'Follow Tag', method: 'MUTATION' },
      ]
    },
  ];

  const codeExamples = {
    graphql: `query GetUserArticles($page: Int!) {
  user(username: "username") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        dateAdded
        coverImage
        tags {
          name
          slug
        }
      }
    }
  }
}`,
    curl: `curl --request POST \\
  --url https://api.hashnode.com \\
  --header 'Authorization: <Your-PAT>' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "query": "query GetUserArticles($page: Int!) { ... }"
  }'`,
    nodejs: `const fetch = require('node-fetch');

const query = \`
  query GetUserArticles($page: Int!) {
    user(username: "username") {
      publication {
        posts(page: $page) {
          title
          brief
          slug
          dateAdded
          coverImage
        }
      }
    }
  }
\`;

async function fetchPosts() {
  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '<Your-PAT>'
    },
    body: JSON.stringify({ query })
  });
  
  const data = await response.json();
  console.log(data);
}`,
    python: `import requests

query = """
query GetUserArticles($page: Int!) {
  user(username: "username") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        dateAdded
        coverImage
      }
    }
  }
}
"""

url = 'https://api.hashnode.com'
headers = {
    'Content-Type': 'application/json',
    'Authorization': '<Your-PAT>'
}

response = requests.post(url, json={'query': query}, headers=headers)
data = response.json()
print(data)`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-primary pt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="bg-secondary rounded-xl p-4">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-white mb-4">API Reference</h2>
                  <div className="space-y-1">
                    {endpoints.map((category) => (
                      <div key={category.category}>
                        <div className="flex items-center gap-2 text-white/60 px-3 py-2">
                          {category.icon}
                          <span>{category.category}</span>
                        </div>
                        <div className="ml-9 space-y-1">
                          {category.items.map((item) => (
                            <button
                              key={item.name}
                              className="block w-full text-left px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {item.name}
                              <span className="ml-2 text-xs text-accent/60">{item.method}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-secondary rounded-xl p-6">
                <h1 className="text-3xl font-bold text-white mb-4">Hashnode API</h1>
                <p className="text-lg text-white/70 mb-6">
                  Hashnode's GraphQL API allows you to access and manage blog posts, user profiles, 
                  and other content programmatically. Use this documentation to integrate Hashnode 
                  into your applications.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <FiCode className="w-5 h-5" />
                    <span>GraphQL API</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <FiBox className="w-5 h-5" />
                    <span>REST Compatible</span>
                  </div>
                </div>
              </div>

              {/* Authentication */}
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
                <p className="text-white/70 mb-4">
                  To authenticate your API requests, you'll need to include your Personal Access Token (PAT) 
                  in the Authorization header of your requests.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <code className="text-accent">
                    Authorization: &lt;Your-PAT&gt;
                  </code>
                </div>
              </div>

              {/* Code Examples */}
              <div className="bg-secondary rounded-xl overflow-hidden">
                <div className="border-b border-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {languages.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => setSelectedLanguage(lang.id)}
                          className={`px-4 py-1 rounded-full text-sm ${
                            selectedLanguage === lang.id
                              ? 'bg-accent text-white'
                              : 'text-white/60 hover:text-white'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {copied ? (
                        <>
                          <FiCheck className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FiCopy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-[#282c34]">
                  <SyntaxHighlighter
                    language={selectedLanguage === 'graphql' ? 'graphql' : selectedLanguage === 'curl' ? 'bash' : selectedLanguage === 'nodejs' ? 'javascript' : 'python'}
                    style={atomOneDark}
                    customStyle={{
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {codeExamples[selectedLanguage]}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* Schema Types */}
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Schema Types</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Post</h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-white/60">Field</div>
                        <div className="text-white/60">Type</div>
                        <div className="text-white/60">Description</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm border-t border-white/10 py-2">
                        <div className="text-accent">title</div>
                        <div className="text-white">String!</div>
                        <div className="text-white/70">The title of the post</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm border-t border-white/10 py-2">
                        <div className="text-accent">brief</div>
                        <div className="text-white">String</div>
                        <div className="text-white/70">A short description of the post</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm border-t border-white/10 py-2">
                        <div className="text-accent">slug</div>
                        <div className="text-white">String!</div>
                        <div className="text-white/70">URL-friendly version of the post title</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">User</h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-white/60">Field</div>
                        <div className="text-white/60">Type</div>
                        <div className="text-white/60">Description</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm border-t border-white/10 py-2">
                        <div className="text-accent">username</div>
                        <div className="text-white">String!</div>
                        <div className="text-white/70">The user's unique username</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm border-t border-white/10 py-2">
                        <div className="text-accent">publication</div>
                        <div className="text-white">Publication</div>
                        <div className="text-white/70">The user's publication details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
