export const docContent = {
  '/docs/introduction': {
    emoji: '👋',
    title: 'Introduction to CodeRow',
    description: 'Modern development platform for streamlined coding workflows',
    content: [
      {
        type: 'section',
        title: 'What is CodeRow?',
        items: [
          { 
            label: 'Modern Development Platform', 
            description: 'CodeRow is a cutting-edge development platform designed to streamline coding workflows and enhance team collaboration with real-time features and modern tooling.'
          },
          { 
            label: 'Tech Stack', 
            description: 'Built with React, TypeScript, Tailwind CSS, and Node.js, providing a robust and scalable foundation for development.'
          },
          { 
            label: 'Developer Experience', 
            description: 'Focus on developer experience with interactive documentation, code analysis, and integrated collaboration tools.'
          },
          { 
            label: 'Enterprise Ready', 
            description: 'Built for scale with security-first approach, performance optimization, and comprehensive documentation.'
          }
        ]
      },
      {
        type: 'section',
        title: 'Key Features',
        items: [
          { 
            label: 'Real-time Collaboration', 
            description: 'Work together in real-time with live code sharing and instant feedback.'
          },
          { 
            label: 'Advanced Code Analysis', 
            description: 'Automatic code analysis with suggestions for improvements and best practices.'
          },
          { 
            label: 'Interactive Documentation', 
            description: 'Modern documentation system with live code examples and instant previews.'
          },
          { 
            label: 'Team Management', 
            description: 'Comprehensive team management with roles, permissions, and activity tracking.'
          }
        ]
      },
      {
        type: 'code',
        language: 'typescript',
        title: 'Quick Example',
        code: `// Create a new CodeRow project
import { CodeRow, Project } from '@coderow/core';

const project = new Project({
  name: 'My Awesome Project',
  team: 'frontend-team',
  features: {
    realtime: true,
    codeAnalysis: true,
    documentation: true
  }
});

// Start collaborating
project.collaborate({
  onUserJoin: (user) => {
    console.log(\`\${user.name} joined the project\`);
  },
  onCodeChange: (change) => {
    project.analyze(change);
  }
});`
      }
    ]
  },
  '/docs/basic-concepts': {
    emoji: '🎯',
    title: 'Basic Concepts',
    description: 'Core concepts and principles of CodeRow',
    content: [
      {
        type: 'section',
        title: 'Core Concepts',
        items: [
          { 
            label: 'Projects', 
            description: 'Self-contained workspaces for organizing code, documentation, and team collaboration.'
          },
          { 
            label: 'Workflows', 
            description: 'Customizable development workflows with automated tasks and integrations.'
          },
          { 
            label: 'Teams', 
            description: 'Organized groups with specific roles, permissions, and collaboration settings.'
          },
          { 
            label: 'Extensions', 
            description: 'Modular system for adding new features and integrations to your workspace.'
          }
        ]
      },
      {
        type: 'section',
        title: 'Architecture Overview',
        items: [
          { 
            label: 'Frontend', 
            description: 'React-based UI with TypeScript for type safety and Tailwind CSS for styling.'
          },
          { 
            label: 'Backend', 
            description: 'Node.js and Express.js backend with GraphQL API for efficient data fetching.'
          },
          { 
            label: 'Real-time', 
            description: 'WebSocket-based real-time system for live collaboration and updates.'
          },
          { 
            label: 'Storage', 
            description: 'Scalable storage system for code, assets, and project data.'
          }
        ]
      }
    ]
  },
  '/docs/contribute': {
    emoji: '🤝',
    title: 'Contributing to CodeRow',
    description: 'Join the CodeRow community and help shape the future of development',
    content: [
      {
        type: 'section',
        title: 'How to Contribute',
        items: [
          { 
            label: 'Code Contributions', 
            description: 'Submit pull requests with new features, bug fixes, or improvements.'
          },
          { 
            label: 'Documentation', 
            description: 'Help improve our documentation with new examples and clarifications.'
          },
          { 
            label: 'Bug Reports', 
            description: 'Submit detailed bug reports to help us improve stability.'
          },
          { 
            label: 'Feature Requests', 
            description: 'Suggest new features and improvements for CodeRow.'
          }
        ]
      },
      {
        type: 'code',
        language: 'bash',
        title: 'Development Setup',
        code: `# Clone the repository
git clone https://github.com/coderow/platform.git

# Install dependencies
cd platform
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build`
      },
      {
        type: 'section',
        title: 'Contribution Guidelines',
        items: [
          { 
            label: 'Code Style', 
            description: 'Follow our ESLint and Prettier configuration for consistent code style.'
          },
          { 
            label: 'Testing', 
            description: 'Include tests for new features and maintain existing test coverage.'
          },
          { 
            label: 'Documentation', 
            description: 'Update documentation to reflect changes and new features.'
          },
          { 
            label: 'Pull Requests', 
            description: 'Create detailed pull requests with clear descriptions and test results.'
          }
        ]
      },
      {
        type: 'resources',
        title: 'Contributor Resources',
        items: [
          { title: 'GitHub Repository', url: 'https://github.com/coderow/platform' },
          { title: 'Issue Tracker', url: 'https://github.com/coderow/platform/issues' },
          { title: 'Discord Community', url: 'https://discord.gg/coderow' },
          { title: 'Code of Conduct', url: 'https://github.com/coderow/platform/blob/main/CODE_OF_CONDUCT.md' }
        ]
      }
    ]
  },
  '/docs/tech/react': {
    emoji: '⚛️',
    title: 'React.js',
    description: 'Modern UI library for building interactive interfaces',
    version: '18.2.0',
    content: [
      {
        type: 'section',
        title: 'Key Features',
        items: [
          { label: 'Virtual DOM', description: 'Efficient rendering through virtual DOM diffing' },
          { label: 'Component-Based', description: 'Build encapsulated components that manage their own state' },
          { label: 'JSX Support', description: 'Write HTML-like syntax directly in JavaScript' },
          { label: 'Hooks API', description: 'Use state and other React features without classes' }
        ]
      },
      {
        type: 'code',
        language: 'jsx',
        title: 'Example Component',
        code: `import { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="p-4">
      {data ? <DataView data={data} /> : <Loading />}
    </div>
  );
};`
      },
      {
        type: 'resources',
        title: 'Learning Resources',
        items: [
          { title: 'Official React Documentation', url: 'https://react.dev' },
          { title: 'React GitHub Repository', url: 'https://github.com/facebook/react' },
          { title: 'React DevTools', url: 'https://chrome.google.com/webstore/detail/react-developer-tools' }
        ]
      }
    ]
  },
  '/docs/tech/tailwind': {
    emoji: '🎨',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development',
    version: '3.3.0',
    content: [
      {
        type: 'section',
        title: 'Core Concepts',
        items: [
          { label: 'Utility-First', description: 'Build complex components using atomic utility classes' },
          { label: 'Responsive Design', description: 'Built-in responsive modifiers for any utility' },
          { label: 'Dark Mode', description: 'Optional dark mode support for all utilities' },
          { label: 'Custom Theming', description: 'Extensive customization through configuration' }
        ]
      },
      {
        type: 'code',
        language: 'jsx',
        title: 'Example Usage',
        code: `<div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
  <img className="h-12 w-12 rounded-full" src={avatar} alt="Avatar" />
  <div>
    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
      John Doe
    </h3>
    <p className="text-gray-500 dark:text-gray-400">
      Frontend Developer
    </p>
  </div>
</div>`
      },
      {
        type: 'resources',
        title: 'Learning Resources',
        items: [
          { title: 'Tailwind CSS Documentation', url: 'https://tailwindcss.com/docs' },
          { title: 'Tailwind UI Components', url: 'https://tailwindui.com' },
          { title: 'Tailwind Play', url: 'https://play.tailwindcss.com' }
        ]
      }
    ]
  },
  '/docs/tech/node': {
    emoji: '📦',
    title: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    version: '18.x',
    content: [
      {
        type: 'section',
        title: 'Core Features',
        items: [
          { label: 'Event-Driven', description: 'Non-blocking I/O model for scalable applications' },
          { label: 'NPM', description: 'World\'s largest software registry' },
          { label: 'Cross-Platform', description: 'Runs on various platforms (Windows, macOS, Linux)' },
          { label: 'Rich Ecosystem', description: 'Large collection of libraries and tools' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'Example Server',
        code: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`
      },
      {
        type: 'resources',
        title: 'Learning Resources',
        items: [
          { title: 'Node.js Documentation', url: 'https://nodejs.org/docs' },
          { title: 'Node.js GitHub', url: 'https://github.com/nodejs/node' },
          { title: 'NPM Registry', url: 'https://www.npmjs.com' }
        ]
      }
    ]
  },
  '/docs/tech/express': {
    emoji: '🚅',
    title: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    version: '4.18.2',
    content: [
      {
        type: 'section',
        title: 'Core Features',
        items: [
          { label: 'Routing', description: 'Advanced routing with support for HTTP methods and middleware' },
          { label: 'Middleware', description: 'Extensive middleware ecosystem for request/response handling' },
          { label: 'Static Files', description: 'Built-in middleware for serving static files' },
          { label: 'Template Engines', description: 'Support for multiple template engines like EJS, Pug' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'Basic Express Server',
        code: `const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`
      },
      {
        type: 'section',
        title: 'Middleware Ecosystem',
        items: [
          { label: 'body-parser', description: 'Parse incoming request bodies' },
          { label: 'cors', description: 'Enable Cross-Origin Resource Sharing' },
          { label: 'helmet', description: 'Secure Express apps with various HTTP headers' },
          { label: 'morgan', description: 'HTTP request logger middleware' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'Advanced Routing Example',
        code: `const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Route with parameters
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use('/api', router);`
      },
      {
        type: 'resources',
        title: 'Learning Resources',
        items: [
          { title: 'Express Documentation', url: 'https://expressjs.com' },
          { title: 'Express GitHub', url: 'https://github.com/expressjs/express' },
          { title: 'Express Examples', url: 'https://github.com/expressjs/express/tree/master/examples' }
        ]
      }
    ]
  },
  '/docs/features/code-analysis': {
    emoji: '🔍',
    title: 'Code Analysis',
    description: 'Advanced code analysis and quality tools',
    content: [
      {
        type: 'section',
        title: 'Analysis Features',
        items: [
          { label: 'Static Analysis', description: 'Detect potential bugs and code smells before runtime' },
          { label: 'Code Quality', description: 'Measure and improve code quality metrics' },
          { label: 'Security Scanning', description: 'Identify security vulnerabilities in code' },
          { label: 'Performance Analysis', description: 'Optimize code performance and resource usage' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'ESLint Configuration',
        code: `module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'error',
    'react/prop-types': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn'
  }
};`
      }
    ]
  },
  '/docs/features/collaboration': {
    emoji: '🤝',
    title: 'Collaboration',
    description: 'Real-time collaboration and team features',
    content: [
      {
        type: 'section',
        title: 'Collaboration Features',
        items: [
          { label: 'Real-time Editing', description: 'Concurrent editing with conflict resolution' },
          { label: 'Comments & Reviews', description: 'Inline code comments and review system' },
          { label: 'Team Management', description: 'Role-based access control and team organization' },
          { label: 'Activity Tracking', description: 'Track team activity and contributions' }
        ]
      }
    ]
  },
  '/docs/guides/deployment': {
    emoji: '🚀',
    title: 'Deployment',
    description: 'Comprehensive deployment guides and best practices',
    content: [
      {
        type: 'section',
        title: 'Deployment Options',
        items: [
          { label: 'Docker', description: 'Containerized deployment with Docker' },
          { label: 'Cloud Platforms', description: 'Deploy to AWS, Google Cloud, or Azure' },
          { label: 'CI/CD', description: 'Automated deployment pipelines' },
          { label: 'Monitoring', description: 'Production monitoring and logging' }
        ]
      },
      {
        type: 'code',
        language: 'dockerfile',
        title: 'Dockerfile Example',
        code: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]`
      }
    ]
  },
  '/docs/api/graphql': {
    emoji: '🔗',
    title: 'GraphQL API',
    description: 'GraphQL API reference and examples',
    content: [
      {
        type: 'section',
        title: 'GraphQL Features',
        items: [
          { label: 'Queries', description: 'Fetch data with GraphQL queries' },
          { label: 'Mutations', description: 'Modify data with GraphQL mutations' },
          { label: 'Subscriptions', description: 'Real-time updates with GraphQL subscriptions' },
          { label: 'Schema', description: 'Type system and schema definition' }
        ]
      },
      {
        type: 'code',
        language: 'graphql',
        title: 'GraphQL Schema Example',
        code: `type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String?
  published Boolean  @default(false)
  author: User!
  tags: [Tag!]!
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

type Tag {
  id: ID!
  name: String! @unique
  posts: [Post!]!
}

type Query {
  user(id: ID!): User
  posts: [Post!]!
}

type Mutation {
  createPost(title: String!, content: String!): Post!
  updatePost(id: ID!, title: String, content: String): Post!
}`
      }
    ]
  },
  '/docs/features/themes': {
    emoji: '🎨',
    title: 'Themes',
    description: 'Customizable themes and styling system',
    content: [
      {
        type: 'section',
        title: 'Theme Features',
        items: [
          { label: 'Dark Mode', description: 'Built-in dark mode support with system preference detection' },
          { label: 'Custom Colors', description: 'Customizable color schemes and palettes' },
          { label: 'Typography', description: 'Advanced typography system with responsive scaling' },
          { label: 'Components', description: 'Themed components with consistent styling' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'Theme Configuration',
        code: `const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#0ea5e9',
      900: '#0c4a6e',
    },
    accent: {
      500: '#8b5cf6',
      600: '#7c3aed',
    },
    dark: {
      bg: '#1a1b1e',
      text: '#e5e7eb',
    }
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
    }
  }
};`
      }
    ]
  },
  '/docs/guides/security': {
    emoji: '🔒',
    title: 'Security',
    description: 'Security best practices and implementation guides',
    content: [
      {
        type: 'section',
        title: 'Security Features',
        items: [
          { label: 'Authentication', description: 'JWT-based authentication with refresh tokens' },
          { label: 'Authorization', description: 'Role-based access control (RBAC)' },
          { label: 'Data Protection', description: 'Data encryption at rest and in transit' },
          { label: 'Security Headers', description: 'HTTP security headers configuration' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'JWT Authentication',
        code: `const jwt = require('jsonwebtoken');

// Generate tokens
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};

// Verify token middleware
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('No token provided');
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};`
      }
    ]
  },
  '/docs/guides/performance': {
    emoji: '⚡',
    title: 'Performance',
    description: 'Performance optimization techniques and best practices',
    content: [
      {
        type: 'section',
        title: 'Performance Features',
        items: [
          { label: 'Code Splitting', description: 'Dynamic imports and route-based code splitting' },
          { label: 'Caching', description: 'Intelligent caching strategies for data and assets' },
          { label: 'Lazy Loading', description: 'Component and image lazy loading' },
          { label: 'Bundle Size', description: 'Bundle size optimization and analysis' }
        ]
      },
      {
        type: 'code',
        language: 'javascript',
        title: 'React Performance Optimization',
        code: `import { lazy, Suspense } from 'react';

// Lazy loaded component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Memoized component
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
}, (prevProps, nextProps) => {
  return prevProps.data.id === nextProps.data.id;
});

// Performance optimized list
const VirtualizedList = ({ items }) => {
  const rowRenderer = useCallback(({ index, style }) => (
    <div style={style}>
      <ListItem data={items[index]} />
    </div>
  ), [items]);

  return (
    <List
      height={400}
      rowCount={items.length}
      rowHeight={50}
      rowRenderer={rowRenderer}
      width={300}
    />
  );
};`
      }
    ]
  },
  '/docs/architecture/database': {
    emoji: '💾',
    title: 'Database',
    description: 'Database architecture and data modeling',
    content: [
      {
        type: 'section',
        title: 'Database Features',
        items: [
          { label: 'Schema Design', description: 'Efficient schema design and relationships' },
          { label: 'Migrations', description: 'Database migrations and version control' },
          { label: 'Query Optimization', description: 'Query performance optimization' },
          { label: 'Data Access', description: 'Data access patterns and ORMs' }
        ]
      },
      {
        type: 'code',
        language: 'typescript',
        title: 'Prisma Schema Example',
        code: `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  tags      Tag[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]
}`
      }
    ]
  }
};
