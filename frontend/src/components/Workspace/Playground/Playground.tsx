import CodeMirror from "@uiw/react-codemirror";
import Split from "react-split";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { Prefrencenav } from "./Prefrencenav/Prefrencenav";
import { useParams } from "react-router-dom";
import { index } from "../../../utils/problems";
import { useState, useRef, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

interface TestCase {
  input: any[] | string;
  expected: any;
}

interface ExecutionResult {
  output: string;
  error: string | null;
  executionTime: number;
  testResults?: {
    passed: boolean;
    input: any[];
    expected: any;
    actual: any;
  }[];
}

export const Playground: React.FC = () => {
  const { id } = useParams<{ id: string }>();
 
  const problem = index.find((problem) => problem.id === id);
  const boilerPlate = problem?.starterCode || "";
  const default_testcases = problem?.Default_Teast_Cases as TestCase[] || [];
  const [testCases, setTestCases] = useState<TestCase[]>(default_testcases);
  const [customInput, setCustomInput] = useState<string>('[[2,7,11,15], 9]');

  const [activeTestCase, setActiveTestCase] = useState(0);
  const [code, setCode] = useState(boilerPlate);
  const [result, setResult] = useState<ExecutionResult>({
    output: "",
    error: null,
    executionTime: 0,
  });
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCode(boilerPlate);
  }, [boilerPlate]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };



  const executeCode = async () => {
    setIsExecuting(true);
    setResult(prev => ({ ...prev, error: null, output: '' }));
    
    try {
      const startTime = performance.now();
      const testResults = [];
      let output = '';

      // Create a sandboxed iframe for safer execution
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      const iframeWindow = iframe.contentWindow;
      if (!iframeWindow) throw new Error('Failed to create execution environment');
      
     

      // Execute the code
      (iframeWindow as any).eval(code);

      // Run test cases
      for (const testCase of testCases) {

        const functionName:any = id; // Assuming the function is named twoSum
        
        try {

          const actual = (iframeWindow as any).twoSum(...(Array.isArray(testCase.input) ? testCase.input : [testCase.input]));

          console.log(actual);
          const passed = JSON.stringify(actual) === JSON.stringify(testCase.expected);
          
          if(!passed){
            alert(`Test case failed for input: ${JSON.stringify(testCase.input)}\nExpected: ${JSON.stringify(testCase.expected)}\nActual: ${JSON.stringify(actual)}`);

          }else{
            alert(`Test case passed for input: ${JSON.stringify(testCase.input)}\nExpected: ${JSON.stringify(testCase.expected)}\nActual: ${JSON.stringify(actual)}`);
          }
          
          testResults.push({
            passed,
            input: Array.isArray(testCase.input) ? testCase.input : [testCase.input],
            expected: testCase.expected,
            actual,
            
          });
          
        } catch (error) {
          testResults.push({
            passed: false,
            input: Array.isArray(testCase.input) ? testCase.input : [testCase.input],
            expected: testCase.expected,
            actual: error instanceof Error ? error.message : 'Runtime error'
          });
        }
      }

      const executionTime = performance.now() - startTime;
      
      setResult({
        output: output || "Execution completed successfully",
        error: null,
        executionTime: parseFloat(executionTime.toFixed(2)),
        testResults
      });
      
      document.body.removeChild(iframe);
    } catch (error) {
      setResult({
        output: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        executionTime: 0
      });
    } finally {
      setIsExecuting(false);
      
    }
    
  };
  

  const runWithCustomInput = () => {
    try {
      const input = JSON.parse(customInput);
      if (!Array.isArray(input)) throw new Error('Input must be an array');
      
      // Add temporary test case
      setTestCases([...testCases, { input, expected: null }]);
      console.log('Running with custom input:', input);
      executeCode();
    } catch (error) {
      setResult({
        output: '',
        error: error instanceof Error ? error.message : 'Invalid input format',
        executionTime: 0
      });
    }
  };
  const clearEditor = () => {
    setCode(problem?.starterCode || '');
    setTestCases(default_testcases);
    setResult({
      output: '',
      error: null,
      executionTime: 0
    });
  };

  return (
    <div className="flex flex-col relative border-2 border-solid border-black rounded" ref={editorRef}>
      <Prefrencenav  />
      
      <Split className="h-[calc(100vh-96px)]" direction="vertical" sizes={[60, 40]}>
        <div className="w-full overflow-auto">
          <CodeMirror
            value={code}
            theme={vscodeLight}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
            onChange={handleCodeChange}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              history: true,
              foldGutter: true,
              drawSelection: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              defaultKeymap: true,
              searchKeymap: true,
              historyKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true,
            }}
          />
        </div>
        
        <div className="w-full px-4 overflow-auto">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-bold leading-5 bg-zinc-200 px-4 py-2 rounded">
                Test Cases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-b-2 border-zinc-900" />
            </div>
          </div>
          
          <div className="flex">
            {problem?.examples.map((_, index) => (
              <div className="mr-2 items-start mt-2" key={index} onClick={() => setActiveTestCase(index)}>
                <button
                  className={`font-medium transition-all focus:outline-none inline-flex bg-zinc-200 hover:bg-zinc-300 rounded-lg px-4 py-1 whitespace-nowrap ${
                    activeTestCase === index ? "text-blue-500 border-b-2 border-blue-500" : ""
                  }`}
                >
                  Case {index + 1}
                </button>
              </div>
            ))}
          </div>

          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4">Input:</p>
            <div className="w-full text-sm rounded-lg border px-3 py-2 bg-zinc-100 border-gray-300 text-black mt-2">
              {problem?.examples[activeTestCase]?.inputText}
            </div>
            
            <p className="text-sm font-medium mt-4">Expected Output:</p>
            <div className="w-full rounded-lg border px-3 py-2 bg-zinc-100 border-gray-300 text-black mt-2">
              {problem?.examples[activeTestCase]?.outputText}
            </div>

            <p className="text-sm font-medium mt-4">Execution Result !!</p>
            <div className="w-full rounded-lg border px-3 py-2 bg-zinc-100 border-gray-300 text-black ">
              {result.output ? (
                <pre className="whitespace-pre-wrap break-words">{result.output}</pre>
              ) : (
                <span className="text-gray-500">{result.output}</span>
              )}
              
              {result.error && <p className="text-red-600 mt-2">{result.error}</p>}
              {result.executionTime > 0 && (
                <p className="text-xs text-zinc-500 mt-2">
                  Execution time: {result.executionTime}ms
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2 font-semibold">
            <div className="flex items-center space-x-2 bg-gray-200 rounded-lg px-3 py-2">
              Console
              <BsChevronUp className="fill-gray-600 mx-1" />
            </div>
            
            <div>
              <button
                onClick={runWithCustomInput}
                disabled={isExecuting}
                className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-1.5 font-medium transition-all focus:outline-none inline-flex text-sm disabled:opacity-50"
              >
                {isExecuting ? 'Running...' : 'Run'}
              </button>
              <button
                onClick={executeCode}
                disabled={isExecuting}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 font-medium transition-all focus:outline-none inline-flex text-sm ml-2 disabled:opacity-50"
              >
                {isExecuting ? 'Testing...' : 'Submit'}
              </button>
            </div>
          </div>
          
          {result.testResults && (
            <div className="mt-4">
              <p className="text-sm font-medium">Test Results:</p>
              <div className="space-y-2 mt-2">
                {result.testResults.map((test, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded ${
                      test.passed ? 'bg-green-100' : 'bg-red-100'
                    }`}
                  >
                    <p className="font-medium">
                      Test Case {index + 1}: 
                      <span className={test.passed ? 'text-green-700' : 'text-red-700'}>
                        {test.passed ? ' Passed' : ' Failed'}
                      </span>
                    </p>
                    {!test.passed && (
                      <div className="text-sm mt-1">
                        <p>Input: {JSON.stringify(test.input)}</p>
                        <p>Output: {JSON.stringify(test.expected)}</p>
                        <p>Actual: {JSON.stringify(test.actual)}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Split>
    </div>
  );
};