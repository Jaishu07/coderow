import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import { FiPlay, FiCopy, FiDownload, FiSave } from 'react-icons/fi';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const editorRef = useRef(null);

  const languages = [
    { id: 'javascript', name: 'JavaScript', extension: '.js', defaultCode: '// Write your JavaScript code here\nconsole.log("Hello, World!");' },
    { id: 'python', name: 'Python', extension: '.py', defaultCode: '# Write your Python code here\nprint("Hello, World!")' },
    { id: 'java', name: 'Java', extension: '.java', defaultCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' },
    { id: 'cpp', name: 'C++', extension: '.cpp', defaultCode: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}' },
    { id: 'c', name: 'C', extension: '.c', defaultCode: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}' }
  ];

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    setCode(languages.find(lang => lang.id === selectedLanguage).defaultCode);
  };

  const handleLanguageChange = (langId) => {
    setSelectedLanguage(langId);
    setCode(languages.find(lang => lang.id === langId).defaultCode);
    setOutput('');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...');

    try {
      if (selectedLanguage === 'javascript') {
        // For JavaScript, we can run it in the browser
        const originalConsole = console.log;
        let output = '';
        console.log = (...args) => {
          output += args.join(' ') + '\n';
        };

        try {
          // Run the code in a try-catch block
          eval(code);
          setOutput(output || 'Code executed successfully!');
        } catch (error) {
          setOutput('Error: ' + error.message);
        }

        console.log = originalConsole;
      } else {
        // Mock output for other languages
        setTimeout(() => {
          setOutput(`Output for ${languages.find(lang => lang.id === selectedLanguage).name}:
Hello, World!`);
        }, 1000);
      }
    } catch (error) {
      setOutput('Error: ' + error.message);
    }

    setIsRunning(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    const currentOutput = output;
    setOutput('Code copied to clipboard!');
    setTimeout(() => setOutput(currentOutput), 2000);
  };

  const downloadCode = () => {
    const extension = languages.find(lang => lang.id === selectedLanguage)?.extension || '.txt';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code${extension}`;
    a.click();
    window.URL.revokeObjectURL(url);

    const currentOutput = output;
    setOutput('Code downloaded successfully!');
    setTimeout(() => setOutput(currentOutput), 2000);
  };

  const saveCode = () => {
    // Mock save functionality
    const currentOutput = output;
    setOutput('Code saved successfully!');
    setTimeout(() => setOutput(currentOutput), 2000);
  };

  return (
    <div className="min-h-screen bg-primary pt-16 pb-8 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Online Code Editor</h1>
          <p className="text-gray-400">Write, run, and share code in multiple programming languages</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-secondary rounded-xl overflow-hidden border border-white/10"
        >
          {/* Editor Header */}
          <div className="bg-secondary/50 p-4 border-b border-white/10">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => handleLanguageChange(lang.id)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      selectedLanguage === lang.id
                        ? 'bg-accent text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyCode}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Copy Code"
                >
                  <FiCopy size={18} />
                </button>
                <button
                  onClick={downloadCode}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Download Code"
                >
                  <FiDownload size={18} />
                </button>
                <button
                  onClick={saveCode}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Save Code"
                >
                  <FiSave size={18} />
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    isRunning
                      ? 'bg-accent/50 text-white/50 cursor-not-allowed'
                      : 'bg-accent text-white hover:bg-accent/90'
                  }`}
                >
                  <FiPlay size={18} />
                  {isRunning ? 'Running...' : 'Run Code'}
                </button>
              </div>
            </div>
          </div>

          {/* Editor Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Code Editor */}
            <div className="h-[600px]">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                language={selectedLanguage}
                theme="vs-dark"
                value={code}
                onChange={setCode}
                onMount={handleEditorDidMount}
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  folding: true,
                  lineNumbers: true,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: 'on',
                }}
                loading={<div className="text-gray-400 p-4">Loading editor...</div>}
              />
            </div>

            {/* Output Console */}
            <div className="h-[600px] bg-[#1e1e1e] overflow-auto">
              <div className="p-4 border-b border-white/10 bg-black/20">
                <span className="text-gray-400">Console Output</span>
              </div>
              <pre className="p-4 text-sm font-mono whitespace-pre-wrap">
                <code className="text-gray-300">{output || 'Run your code to see the output here...'}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodeEditor;
