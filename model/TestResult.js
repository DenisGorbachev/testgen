import { ajv, getSchemaId } from '../util/ajv.js'

export const TestResultSamples = [
  {
    status: 'passed',
    title: 'User adds author',
    duration: 350,
    failures: [],
    origin: {/* original Jest TestResult */ },
  },
  {
    status: 'failed',
    title: 'User receives an error while adding a duplicate author',
    duration: 350,
    failures: [
      {
        passed: false,
        message: 'Error: Command failed with ENOENT: /home/starfall/workspace/testgen/testgen.dev.sh /home/starfall/workspace/testgen/test/sample/quadratic-equation.js /tmp/tmp-5586-Gc1a4t3bH8Ox\n' +
          'spawn /home/starfall/workspace/testgen/testgen.dev.sh ENOENT',
        stack: 'Error: Command failed with ENOENT: /home/starfall/workspace/testgen/testgen.dev.sh /home/starfall/workspace/testgen/test/sample/quadratic-equation.js /tmp/tmp-5586-Gc1a4t3bH8Ox\n' +
          'spawn /home/starfall/workspace/testgen/testgen.dev.sh ENOENT\n' +
          '    at Process.ChildProcess._handle.onexit (internal/child_process.js:268:19)\n' +
          '    at onErrorNT (internal/child_process.js:464:16)\n' +
          '    at processTicksAndRejections (internal/process/task_queues.js:80:21)',
        actual: '',
        expected: '',
      },
    ],
    origin: {/* original Jest TestResult */ },
  },
  {
    status: 'failed',
    title: 'User runs generated tests',
    duration: 399,
    failures: [
      {
        message: 'Error: Command failed with exit code 1: jest /home/starfall/workspace/testgen/test/generated\n' +
          'No tests found, exiting with code 1\n' +
          'Run with `--passWithNoTests` to exit with code 0\n' +
          'In /home/starfall/workspace/testgen\n' +
          '  30 files checked.\n' +
          '  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 1 match\n' +
          '  testPathIgnorePatterns: /node_modules/ - 30 matches\n' +
          '  testRegex:  - 0 matches\n' +
          'Pattern: /home/starfall/workspace/testgen/test/generated - 0 matches',
        stack: 'Error: Command failed with exit code 1: jest /home/starfall/workspace/testgen/test/generated\n' +
          'No tests found, exiting with code 1\n' +
          'Run with `--passWithNoTests` to exit with code 0\n' +
          'In /home/starfall/workspace/testgen\n' +
          '  30 files checked.\n' +
          '  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 1 match\n' +
          '  testPathIgnorePatterns: /node_modules/ - 30 matches\n' +
          '  testRegex:  - 0 matches\n' +
          'Pattern: /home/starfall/workspace/testgen/test/generated - 0 matches\n' +
          '    at makeError (/home/starfall/workspace/testgen/node_modules/execa/lib/error.js:59:11)\n' +
          '    at handlePromise (/home/starfall/workspace/testgen/node_modules/execa/index.js:114:26)\n' +
          '    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n' +
          '    at Object.<anonymous> (/home/starfall/workspace/testgen/index.test.js:11:18)',
        actual: '',
        expected: '',
        passed: false,
      },
    ],
  },
]

export const TestResultSchema = {
  $async: true,
  $id: getSchemaId(__filename),
  title: 'testResult',
  description: 'an object with status & failures collected during test execution',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: ['passed', 'failed', 'skipped', 'pending', 'todo', 'disabled'],
    },
    title: {
      type: 'string',
    },
    duration: {
      type: 'integer',
      description: 'in milliseconds',
    },
    failures: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          error: { type: 'object' },
          message: { type: 'string' },
          stack: { type: 'string' },
          actual: { type: 'string' },
          expected: { type: 'string' },
          passed: { type: 'boolean' },
        },
      },
    },
    origin: {
      type: 'object',
    },
  },
}

export const validateTestResult = ajv.compile(TestResultSchema)

/**

 // Jest TestResult

 export type Milliseconds = number;

 type Status = 'passed' | 'failed' | 'skipped' | 'pending' | 'todo' | 'disabled';

 type Callsite = {
  column: number;
  line: number;
};

 // this is here to make it possible to avoid huge dependency trees just for types
 export type AssertionResult = {
  ancestorTitles: Array<string>;
  duration?: Milliseconds | null;
  failureDetails: Array<unknown>;
  failureMessages: Array<string>;
  fullName: string;
  invocations?: number;
  location?: Callsite | null;
  numPassingAsserts: number;
  status: Status;
  title: string;
};

 export type SerializableError = {
  code?: unknown;
  message: string;
  stack: string | null | undefined;
  type?: string;
};

 */
