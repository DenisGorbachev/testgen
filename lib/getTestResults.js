/**
 * Outputs:
 * - Test results
 *
 * Inputs:
 * - Event definitions
 *
 * Metrics:
 * - Coverage (including edge cases)
 * - Implementation time
 * - Run time
 *
 * Notes:
 * - Testgen aims for larger coverage per implementation time
 * - May use testgen + jest (but not necessary if testgen can execute jest under the hood)
 * - Since program is a tree, it's possible to write isolated tests which run faster (individually - this increases debugging speed of a single test)
 *   - ~ Encourage writing isolated tests
 *   - ~ Encourage writing integrated tests
 *
 * Options:
 * - Generate test results from {operations: [], assertions: []}, where:
 *   - operations are (already defined)
 *   - assertions are functions (snapshot) -> errors
 * - Generate test results from {operations: [], diffs: []}, where:
 *   - operations are (already defined)
 * - [Can't: we need snapshots to generate tests] Generate tests from jest (generate tests -> call jest)
 *
 * Diff workflow:
 *   - Generate an event tree
 *   - Execute a branch
 *   - Display a data diff
 *   - If the diff is correct: user marks it as correct -> testgen executes the next branch
 *   - If the diff is incorrect: user marks it as incorrect -> fixes the code -> reruns the branch
 *   - If the user wants to change a variable name: user find-replaces it over the project
 */


export async function getTestResultsViaDirectedGenerators(events) {
  const generator = getGenerator()
  let result = generator.next()
  while (!result.done) {
    const scenarios = result.value
    const simulation = await simulate({ playbook })
    if (simulation.estimate > bestEstimate) {
      bestEstimate = simulation.estimate
      bestPlaybook = playbook
    }
    result = generator.next(simulation)
  }
}

export async function getTestResultsViaUndirectedGeneratorsAndFilters() {

}
