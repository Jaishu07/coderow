import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiSmartphone } from 'react-icons/fi';

const CodeShowcase = () => {
  const codeSnippets = [
    {
      icon: <FiCode className="text-3xl text-accent" />,
      title: 'Web Development',
      language: 'JavaScript',
      code: `function createComponent() {
  const [state, setState] = useState(null);
  useEffect(() => {
    // Component logic
    setState(data);
  }, []);
  return <div>Component</div>;
}`,
    },
    {
      icon: <FiDatabase className="text-3xl text-accent" />,
      title: 'Backend Development',
      language: 'Python',
      code: `class DataService:
    def __init__(self):
        self.db = Database()
    
    async def get_data(self):
        result = await self.db.query()
        return result`,
    },
    {
      icon: <FiCloud className="text-3xl text-accent" />,
      title: 'Cloud Computing',
      language: 'YAML',
      code: `version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production`,
    },
    {
      icon: <FiSmartphone className="text-3xl text-accent" />,
      title: 'Mobile Development',
      language: 'Swift',
      code: `struct ContentView: View {
    @State private var data = []
    
    var body: some View {
        List(data) { item in
            ItemRow(item: item)
        }
    }
}`,
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Master Multiple Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            From web development to cloud computing, learn the most in-demand programming languages and frameworks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {codeSnippets.map((snippet, index) => (
            <motion.div
              key={snippet.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  {snippet.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{snippet.title}</h3>
                  <p className="text-gray-400">{snippet.language}</p>
                </div>
              </div>
              <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono">
                  {snippet.code}
                </code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
